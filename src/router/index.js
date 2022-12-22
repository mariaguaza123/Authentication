import { Router } from 'express';
import { signUp, logIn, getHome, logOut } from '../controller/login.js'
import passport from 'passport';
import { isLoggedIn } from '../middleware/authentication.js';

const passportOptions = { badRequestMessage: 'Error en el body' };

const router = Router();

router.post('/signUp', signUp);

router.post('/logIn', passport.authenticate( 'logIn', passportOptions), logIn);

router.get('/home', isLoggedIn, getHome);

router.get('/logout', logOut);


export default router;