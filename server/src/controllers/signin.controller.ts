import prisma from "../db";
import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";
import bcrypt from 'bcrypt'


const signIn = asyncHandler(async (req:Request,res:Response)=>{
    const {email, password} = req.body;
    try {
        const user = await prisma.user.findUnique({
            where:{
                email: email,
            }
        })
        if (!user){
            res.send ("User does not exist");
        }
        else if (user.verified == false){
            res.send ("Verify user then Login");
            return;
        }
        else{
            bcrypt.compare(password, user.password, function(err, result) {
                if (!result){
                    res.send ("Wrong Password");
                }
                else {
                    res.send ({
                       message: "Login Successful",
                       userId: user.id,
                    });
                }
            });
        }
    } catch (error) {
        console.log (error);
    }
})

export {signIn}