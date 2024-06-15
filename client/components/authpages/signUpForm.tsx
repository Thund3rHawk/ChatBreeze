'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod" 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from 'axios'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  username: z.string().min(4).max(50),
  email: z.string().email(),
  password: z.string().min(8, "Password must be atleast 8 characters")
})

const SignUpForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
  })
  

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      username: values.username,
      password: values.password,
      email: values.email,
    }
    const res =await axios.post ('http://localhost:8080/signup',data);
    toast({
      description: `${res.data.description} and ${res.data.otp}`,

    })
    router.push (`/authPage/${res.data.id}`);
    form.reset();
  }


  return (
    <div className='m-10'>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Name" {...field} />
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
                <Input placeholder="Enter your email" {...field} type='email'/>
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
                <Input placeholder="Enter your password" {...field} type= 'password'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">SignUp</Button>
      </form>
    </Form>

    </div>
  )
}

export default SignUpForm