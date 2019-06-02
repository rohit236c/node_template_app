const express = require('express');
const hbs = require('hbs');
const path = require('path')
const app = express();


app.set('view engine','hbs')
const PathPartials = path.join(__dirname , './partials')
hbs.registerPartials(PathPartials)


app.get('/',(req,res)=>{
    res.render("index")
})

app.listen(3000,()=>{
    console.log("port is at http://localhost:3000")
})