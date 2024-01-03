const express = require('express');
const authRoutes = require('./router/authroutes');
const databaseconnect = require('./Config/databaseconfig');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');



databaseconnect();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin :[ process.env.CLIENT_URL ],
    credentials : true
}));

app.use('/api/auth/',authRoutes)

app.use('/',(req,res)=>{
    res.status(200).json({ data : 'jwt auth server'});
})

module.exports = app;