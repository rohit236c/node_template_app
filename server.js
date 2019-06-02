const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("hey there")
})

app.listen(3000,()=>{
    console.log("port is at http://localhost:3000")
})