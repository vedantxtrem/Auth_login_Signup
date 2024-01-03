const express = require('express');
const authRoutes = require('./router/authroutes');
const databaseconnect = require('./Config/databaseconfig');
const app = express();
const cookieParser = require('cookie-parser');


databaseconnect();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth/',authRoutes)

app.use('/',(req,res)=>{
    res.status(200).json({ data : 'jwt auth server'});
})

module.exports = app;