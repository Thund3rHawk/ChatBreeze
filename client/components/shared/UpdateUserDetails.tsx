"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { endpoints } from "@/utils/endpoints";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import { toast } from "../ui/use-toast";

const formSchema = z.object({
  avatarUrl: z.unknown(),
  username: z.string().min(2).max(50),
  email: z.string().email(),
  name: z.string().min(2).max(50),
  bio: z.string().min(5).max(2000),
});

interface props {
  userId: string;
  username: string;
  Name: string;
  Email: string;
  Bio: string;
}

const UpdateUserDetails: React.FC<props> = ({ userId, username, Name, Email, Bio }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvatarUrl] = useState<any>("https://github.com/shadcn.png");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatarUrl: avatarUrl,
      username: username,
      email: Email,
      name: Name,
      bio: Bio,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setAvatarUrl(values.avatarUrl);
    try {
      const response = await axios.post(endpoints.uesrDetailsUpdate, {
        userId: userId,
        userName: values.username,
        name: values.name,
        bio: values.bio,
        email: values.email,
      });

      toast({
        title: "User Details Update Message",
        description: `${response.data.message}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "User Details Update Error",
      });
    }
  }

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: any) => {
    const file = e.target.files?.[0];
    if (file != undefined) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
        form.setValue("avatarUrl", reader.result as string);
      };
      reader.readAsDataURL(file);
      onChange(file);
    }
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col items-center justify-center m-10"
        >
          <FormField
            control={form.control}
            name="avatarUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    {avatarUrl && (
                      <Image src={avatarUrl} alt="avatar" width={150} height={150} className="rounded-full" />
                    )}
                    <Input
                      type="file"
                      className="hidden w-[30vw]"
                      ref={fileInputRef}
                      onChange={(e) => {
                        handleFileChange(e, field.onChange);
                      }}
                    />
                    <div onClick={handleFileInputClick} className="cursor-pointer">
                      <CameraAltRoundedIcon />
                    </div>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} className="w-[30vw]" />
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
                  <Input placeholder="Enter your email" {...field} className="w-[30vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} className="w-[30vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Bio" {...field} className="w-[30vw]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Update</Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateUserDetails;
