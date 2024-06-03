"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useChat from "@/hooks/useChat";

const formSchema = z.object({
  message: z.string().max(500),
});

const ChatArea = () => {
  const { chat, setMessage } = useChat();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setMessage(values.message);
    form.reset();
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex  bottom-0">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter Message" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Send</Button>
        </form>
      </Form>

      <div className="">
        {chat.map((payload, index) => {
          return (
            <div key={index} className="border border-black rounded-xl">
              <p>{payload}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChatArea;
