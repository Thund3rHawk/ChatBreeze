import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import prisma from "../db";

const message = asyncHandler(async (req:Request, res:Response)=>{
    const {message, senderId, reciverId, seenMessage, sendMessageTime} = req.body;
    try {
        await prisma.messages.create({
            data:{
                message: message,
                senderId: senderId,
                recieverId: reciverId,
                seenMessage: seenMessage,
                sendMessageTime: sendMessageTime,
                post:{
                    connect:{
                        id: reciverId
                    }
                }
            }
        })
        res.send({message: "message send successfully"})
    } 
    catch (error) {
        res.send ('Sending Message Error' + error);    
        console.log ("Message Send Error", error);
    }
})

export {message};