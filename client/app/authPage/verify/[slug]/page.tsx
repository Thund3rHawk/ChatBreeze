"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { ToastAction } from "@radix-ui/react-toast";
import { useRouter } from "next/navigation";
import { endpoints } from "@/utils/endpoints";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

function Verify({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const postData = {
      id: params.slug,
      otp: data.pin,
    };
    try {
      setLoading(true);
      const res = await axios.post(endpoints.verifyOtpEndpoint, postData);

      console.log(postData);
      if (res.data === "User Verified") {
        router.push("/authPage");
        toast({
          title: "OTP Validation",
          description: `${res.data}`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "OTP Validation",
          description: `${res.data}`,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${error}`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  }

  async function sendNewOtp() {
    // have to complete the function and update the new otp for the specific user
  }

  return (
    <div className="flex min-h-screen min-w-screen justify-center items-center flex-col">
      <div className="bg-[#def2f1] rounded-3xl p-8  shadow-blue-950 shadow-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-[30vw] space-y-6 bg-[#def2f1] rounded-3xl p-8">
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>One-Time Password</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} className="bg-white" />
                        <InputOTPSlot index={1} className="bg-white" />
                        <InputOTPSlot index={2} className="bg-white" />
                        <InputOTPSlot index={3} className="bg-white" />
                        <InputOTPSlot index={4} className="bg-white" />
                        <InputOTPSlot index={5} className="bg-white" />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>Please enter the one-time password sent to your email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {loading ? (
              <Button disabled className="w-full">
                <Loader2 className="mr-2 h-4 animate-spin " />
                Verifying ...
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Submit
              </Button>
            )}
          </form>
        </Form>
        <div className="text-center">
          Didn&lsquo; t get an OTP &nbsp;
          <button onClick={sendNewOtp} className="text-violet-600">
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Verify;
