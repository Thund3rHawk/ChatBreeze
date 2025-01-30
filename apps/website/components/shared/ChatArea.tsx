"use client";
import React, { useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useChat from "@/hooks/useChat";
import useUserChat from "@/hooks/useUserChat";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { motion } from "framer-motion";

const formSchema = z.object({
  message: z.string().max(500),
});

interface props {
  senderId: string;
}

const ChatArea: React.FC<props> = ({ senderId }) => {
  const { chat, setMessage, setChat } = useChat();
  const { userId, setUserId, setUserName, userName, showUserDetails, setShowUserDetails } = useUserChat();

  // Time Shower
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 100 ? 0 + minutes : minutes;
  let currentTime = hours + ":" + minutes + " " + ampm;

  // Here we fetch the messages through the api while loading first, using the userId taken by chatProvider.
  useEffect(() => {
    // Function for close chatArea using escape.
    setMessage("");
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        closeChat();
      }
    };
    if (userId) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [userId]);

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
    const msg = values.message.trim();
    if (msg != "") {
      setMessage(values.message);
      const chats = [...chat, { message: values.message, recieverId: userId, senderId: senderId, time: currentTime }];
      setChat(chats);
      form.reset();
    }
  }

  const closeChat = () => {
    setUserName("");
    setUserId("");
  };

  if (userId === "") {
    return <div className="flex justify-center items-center h-full">Chats will appear here.</div>;
  }

  const userDetails = () => {
    setShowUserDetails(!showUserDetails);
  };

  return (
    <>
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex justify-between border-b border-muted pb-4">
          <div className="flex items-center justify-between">
            <Avatar className="mx-6" onClick={userDetails}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="bg-slate-400">CN</AvatarFallback>
            </Avatar>
            <div>
              <h1>{userName}</h1>
              <p className="text-green-400">{userId}</p>
            </div>
          </div>
          <Button className="rounded-3xl m-1" onClick={closeChat} variant="ghost">
            X
          </Button>
        </div>
        <div>
          <div className="overflow-y-auto h-[78vh] p-4 space-y-4 no-scrollbar">
            {checkChat ? (
              <>
                {chat.map((payload, index) => {
                  return (
                    <>
                      {/* {!payload.isUser ? (
                          <>
                          <div className="font-bold text-orange-500">{userName}</div>
                          </>
                          ) : (
                            ""
                            )} */}

                      {(payload.recieverId === senderId && payload.senderId === userId) ||
                      (payload.recieverId === userId && payload.senderId === senderId) ? (
                        <div
                          key={index}
                          className={`flex ${payload.recieverId === userId ? "justify-end" : "justify-start"} !m-0`}
                        >
                          <div
                            className={`${payload.recieverId === userId ? "bg-muted text-black" : "bg-[#015b6f] text-primary-foreground"} rounded-md py-1 px-3 max-w-[70%] flex justify-between items-end my-1`}
                          >
                            <p className="me-3">{payload.message}</p>
                            <p className="text-[10px] text-gray-400">{currentTime}</p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
              </>
            ) : (
              <div className="flex justify-center items-center h-[70vh]">Your chats will appear here</div>
            )}
          </div>
          <div className="border-t border-muted p-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
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
                          className="w-[55vw] ms-5"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">
                  <NearMeRoundedIcon />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ChatArea;
