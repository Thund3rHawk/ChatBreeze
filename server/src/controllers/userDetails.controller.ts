import { Request, Response } from 'express'
import { asyncHandler } from "../utils/asyncHandler";
import prisma from '../db';

const userDetails = asyncHandler(async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { avatarImage, bio, name } = req.body;

    try {
        // have to store the avatarImage to cloudinary and save the link to avatarUrl.
        const avatarUrl = ""

        const data = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                avatarUrl: avatarUrl,
                bio: bio,
                name: name,
            }
        })
        res.send({ user: data, message: "user saved successfully" })
    } catch (error) {
        console.log ("user details adding error: ", error);
    }
})

export { userDetails }