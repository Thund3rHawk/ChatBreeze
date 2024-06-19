"use client";
import React, { useEffect } from "react";
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
import useUserChat from "@/hooks/useUserChat";

const formSchema = z.object({
  message: z.string().max(500),
});

const ChatArea = () => {
  const { chat, setMessage } = useChat();
  const {userId, setUserId} = useUserChat();

  // Here we fetch the messages through the api while loading first, using the userId taken by chatProvider.
  // useEffect(()=>{

  // },[]);

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

  const closeChat =()=>{
    setUserId('');
  }
  
  if (userId === ''){
    return (
      <div>
        Chats will appear here.
      </div>
    )
  }
  
  return (
    <>  
      <Button className="absolute right-11 rounded-3xl" onClick={closeChat}>X</Button>
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
          Chats Will appear here {userId}
        </div>
      )}
    </>
  );
};

export default ChatArea;
