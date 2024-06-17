import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import prisma from "../db";

const addUser = asyncHandler(async (req: Request, res: Response) => {
    const { userId, email, name } = req.body;
    // here have to check the email is valid or not and then i can add the user
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
        await prisma.contact.create({
            data: {
                email: email,
                name: name,
                post: {
                    connect: {
                        id: userId
                    }
                }
            }
        })
        res.send("user added successfully")
    } catch (error) {
        res.send("adding user error: " + error);
        console.log(error);
    }
})

export { addUser }