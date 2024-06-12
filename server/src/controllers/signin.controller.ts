import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";


const signIn = asyncHandler(async (req:Request,res:Response)=>{
    const {email, password} = req.body;
    // First we have to check the email, if it is verified or not then allow for login/signin

})

export {signIn}