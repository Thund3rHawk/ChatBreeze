import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import prisma from "../db";

const updateContactName = asyncHandler (async (req:Request,res:Response)=>{
    try {          
        const {contactObjectId, name} = req.body;
        const user = await prisma.contact.update({
            where:{
                id:contactObjectId,
            },
            data:{
                name: name
            }
        })
        res.send ({
            message: "contact name updated successfully",            
        })
    } catch (error) {
        res.send (error);
        console.log ("updateConatact Name error")
    }
})

export {updateContactName}