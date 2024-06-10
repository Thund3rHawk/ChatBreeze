import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";

const signUp = asyncHandler(async (req:Request,res:Response)=>{
    const {email, username, password} = req.body;
    // Here we call prisma to create and store the new user to db
    

})

export {signUp};