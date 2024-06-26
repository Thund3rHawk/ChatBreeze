import prisma from "../db";
import { asyncHandler } from "../utils/asyncHandler";
import { OTP } from "./signup.controller";

const verifyOtp = asyncHandler(async (req, res) => {
    const { id, otp } = req.body;
    try {
        if (OTP === otp) {
            await prisma.user.update({
                where: {
                    id: id,
                },
                data: {
                    verified: true,
                },
            })
        }
        res.send ("User Verified");
    } catch (error) {
        res.send ("User is not verified");
        console.log ("verified Error: ", error);
    }
})

export { verifyOtp };