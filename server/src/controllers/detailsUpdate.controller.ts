import { Request, Response } from 'express'
import { asyncHandler } from "../utils/asyncHandler";
import prisma from '../db';

const detailsUpdate = asyncHandler(async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { avatarImage, bio, name, userName, email } = req.body;

    try {
        // have to store the avatarImage to cloudinary and save the link to avatarUrl.
        const avatarUrl = ""

        const checkEmail = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })

        if (!checkEmail || (checkEmail && checkEmail.id === userId)){
            const data = await prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    avatarUrl: avatarUrl,
                    bio: bio,
                    name: name,
                    username: userName,
                    email: email
                }
            })
            res.send({ user: data, message: "user saved successfully" })
        }
        else {
            res.send ({message: "email already exists"})
        }
    } catch (error) {
        console.log ("user details update error: ", error);
    }
})

export { detailsUpdate }