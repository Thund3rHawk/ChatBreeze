"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { endpoints } from "@/utils/endpoints";



const formSchema = z.object({
  message: z.string().max(500),
});

const RightSection = () => {
  const [chat, setChat] = useState<String[]>([]);
  const socket = io(endpoints.socketEndpoint);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Emitting the data in socket io
    socket.emit ("chat", values);
    console.log(values);
  }

  useEffect(() => {
    socket.on("chat", (payload) => {
      const chats = [...chat, payload];
      setChat(chats);
    });
  });

  return (
    <div className="w-[70vw] ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex  bottom-0">
          <FormField
            control={form.control}
            name="message"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter Message" {...field} type = 'text'/>
                </FormControl>
                <FormMessage /> 
              </FormItem>
            )}
          />
          <Button type="submit">Send</Button>
        </form>
      </Form>

      <div className="">
        {chat.map((payload, index)=>{
          return (
            <div key={index} className="border border-black rounded-xl">
              <p>{payload.message}</p>
            </div>
          ) 
        })}
      </div>

    </div>
  );
};

export default RightSection;
