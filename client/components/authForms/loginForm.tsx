"use client";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { createCookie } from "@/utils/createCookie";
import { useRouter } from "next/navigation";
import { endpoints } from "@/utils/endpoints";
import { useToast } from "../ui/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be atleast 8 characters"),
});

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    createCookie(loggedIn, userId);
    if (loggedIn) router.push(`/home/${userId}`);
  }, [loggedIn]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      email: values.email,
      password: values.password,
    };

    try {
      setLoading(true);
      const res = await axios.post(endpoints.singinEndpoint, data);
      if (res.data.message === "Login Successful") {
        toast({
          title: "Login Successful",
        });
        setLoggedIn(true);
        setUserId(res.data.userId);
      } else if (res.data === "Wrong Password") {
        toast({
          variant: "destructive",
          title: res.data,
          description: "Please enter correct password",
        });
      } else if (res.data === "User does not exist") {
        toast({
          variant: "destructive",
          title: res.data,
          description: "Plase SignIn first!",
        });
      } else if (res.data === "Verify user then Login") {
        toast({
          variant: "destructive",
          title: "Email is not verified.",
          description: "Plase verify your email.",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="m-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} type="email" className="bg-white"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password" {...field} type="password" className="bg-white"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {loading ? (
            <Button disabled className="w-full">
              <Loader2 className="mr-2 h-4 animate-spin " />
              Signing in
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
