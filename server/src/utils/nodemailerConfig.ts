import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config();

const userEmail = process.env.AUTH_EMAIL;
const password = process.env.AUTH_EMAIL_PASS;


export const transporter = nodemailer.createTransport ({
    host: 'smtp.gmail.com',  
    port: 465,
    secure: true,  
    auth:{
        user: userEmail,
        pass: password,
    },
    tls: {
        rejectUnauthorized: false,
    },
})

transporter.verify ((err, success)=>{
    if (err){
        console.log ("Verify Error:", err);
    }
    else{
        console.log ("Ready for message")
        console.log (success);
    }
})

export function sendEmail(email:string, otp: string) {
    const mailOptions = {
        from: userEmail, 
        to: email,
        subject: 'Varify OTP',
        html: `<p>OTP for ChatBreeze <b>${otp}</b> </p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}