const express = require('express');
const { signup , signIn , getUser, Logout} = require('../controller/authController');
const jwtAuth = require('../middleware/jwtAuth');
const authRoutes = express.Router();

authRoutes.post('/signup',signup);
authRoutes.post('/signin',signIn);
authRoutes.get('/user',jwtAuth,getUser);
authRoutes.get('/logout',jwtAuth, Logout)


module.exports = authRoutes;