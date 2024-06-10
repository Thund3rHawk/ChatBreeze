import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";


const signIn = asyncHandler(async (req:Request,res:Response)=>{
    const {username, password, email} = req.body;

})

export {signIn}