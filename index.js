require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./Router/router')
require('./DB/connection');


const brServer = express();

brServer.use(cors())
brServer.use(express.json());
brServer.use(router);

const PORT = 3000;

brServer.listen(PORT,()=>{
    console.log(`brServer start Running at PORT: ${PORT} and waiting for cliend request`)
})

brServer.get('/',(req,res)=>{
    res.send("<h1 style=color:blueviolet>Book Review Server start Running successfully</h1>")
})