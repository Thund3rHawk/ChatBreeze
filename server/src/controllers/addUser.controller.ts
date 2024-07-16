import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import prisma from "../db";

const addUser = asyncHandler(async (req: Request, res: Response) => {
    const { userId, email, name } = req.body;
    try {
        const checkEmail = await prisma.user.findUnique({ 
            where: {
                email: email,
                verified: true,
            } 
        });
        if (!checkEmail) {
            res.send("Invalid Email");
            return;
        }
        // user can add a email in its contact once have to write this logic        
        const user = await prisma.contact.create({
            data: {
                email: email,
                name: name,
                contactId: checkEmail.id,
                bio: checkEmail.bio,
                avatarUrl: checkEmail.avatarUrl,
                post: {
                    connect: {
                        id: userId
                    }
                }
            }
        })
        res.send({
            message: "user added successfully",
            userId: user.contactId,
            contactObjectId: user.id,
        })
    } catch (error) {
        res.send("adding user error: " + error);
        console.log(error);
    }
})

export { addUser }