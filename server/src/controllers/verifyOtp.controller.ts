import prisma from "../db";
import { asyncHandler } from "../utils/asyncHandler";

const verifyOtp = asyncHandler(async (req, res) => {
  const { id, otp } = req.body;
  try {
    const otpData = await prisma.otpSchema.findUnique({
      where: {
        userId: id,
      },
    });

    if (otpData?.otp === otp) {
      await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          verified: true,
        },
      });
      res.send("User Verified");
    } else {
      res.send("Incorrect OTP please enter correct one.");
    }
  } catch (error) {
    res.send("User is not verified");
    console.log("verified Error: ", error);
  }
});

export { verifyOtp };
