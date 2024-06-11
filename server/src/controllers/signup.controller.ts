import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcrypt'
import randomstring from 'randomstring'
import { sendEmail } from "../utils/nodemailerConfig";


const prisma = new PrismaClient();

const otp = randomstring.generate({
    length: 6,
    charset: ['numeric']
});

const signUp = asyncHandler(async (req:Request,res:Response)=>{
    const {email, username, password} = req.body;
    try {
        prisma.$connect;
        bcrypt.genSalt(10,function (err, salt){
            if (err){
                console.log ("Bcrypt Error: ", err);
                return;
            }
            bcrypt.hash(password, salt, async function(err, hash) { 
                if (err){
                    console.log ('Bcrypt Hash Error: ', err);    
                    return;           
                }
                const user = await prisma.user.create({
                    data:{
                        username: username,
                        email: email,
                        password: hash
                    }
                })
                sendEmail(email,otp);

                console.log (user);
            });
        })
 

    } catch (error) {
        console.log ("Prisma Error: ",error)
    }

})

export {signUp};