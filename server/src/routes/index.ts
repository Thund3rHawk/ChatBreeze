import express from 'express'
import { signIn } from '../controllers/signin.controller';
import { signUp } from '../controllers/signup.controller';
import { verifyOtp } from '../controllers/verifyOtp.controller';

const router = express.Router();

// SignIn Route
router.route('/signin').post(signIn);

// SignUp Route
router.route('/signup').post(signUp);


// VerifyOTP Route
router.route('/verify').post(verifyOtp);

export {router};