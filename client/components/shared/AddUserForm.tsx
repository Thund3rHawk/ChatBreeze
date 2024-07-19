"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "../ui/dialog";
import useAddUser from "@/hooks/useAddUser";
import UserCard from "./UserCard";
import { DialogClose } from "@radix-ui/react-dialog";
import { endpoints } from "@/utils/endpoints";
import axios from "axios";
import { getCookiesData } from "@/utils/getCookiesData";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
});

const AddUserForm = () => {
  const { userCard, setUserCard } = useAddUser();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = {
        userId: await getCookiesData(),
        email: values.email,
        name: values.username,
      };
      const res = await axios.post(endpoints.addUser, data);
      if (res.data === "Invalid Email") {
        toast({
          variant: "destructive",
          title: res.data,
          description: "Enter a existing email",
        });
        return;
      }
      // console.log(res.data);      
      const addUserCard = [...userCard, <UserCard key = {res.data.userId} name={values.username} userId={res.data.userId} contactObjectId= {res.data.contactObjectId}/>];
      setUserCard(addUserCard);
      toast({
        title: "User Added Successfully",
      });
      form.reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Add User</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </Form>
    </div>
  );
};

export default AddUserForm;
