import express from 'express'
import { signIn } from '../controllers/signin.controller';
import { signUp } from '../controllers/signup.controller';
import { signOut } from '../controllers/signout.controller';

const router = express.Router();

// SignIn Route
router.route('/signin').post(signIn);

// SignUp Route
router.route('/signup').post(signUp);

// SignOut Route
router.route('/signout').post(signOut);