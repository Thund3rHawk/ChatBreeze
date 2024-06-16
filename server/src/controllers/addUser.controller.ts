import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import prisma from "../db";

const addUser = asyncHandler(async (req:Request,res:Response)=>{
    const {userId,email,name} = req.body;

    try {
        await prisma.contact.create({
            data:{
                email: email,
                name: name,
                post:{
                    connect:{
                        id: userId
                    }
                }
            }
        })
    } catch (error) {
        res.send (error);
        console.log (error);
    }
})

export {addUser}