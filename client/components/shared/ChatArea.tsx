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
  let checkChat = false;
  if (chat.length != 0) {
    checkChat = true;
  }
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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="absolute flex bottom-10 justify-between"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter Message"
                    {...field}
                    type="text"
                    className="w-[53vw] ms-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Send</Button>
        </form>
      </Form>
      {checkChat ? (
        <div className="overflow-auto h-[80vh] no-scrollbar p-3">
          {chat.map((payload, index) => {
            return (
              <div
                key={index}
                className="border bg-slate-600 border-black rounded-3xl p-3 w-2/5 mx-3"
              >
                <p>{payload}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[70vh]">
          Chats Will appear here
        </div>
      )}
    </>
  );
};

export default ChatArea;
