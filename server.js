const express = require('express');
const hbs = require('hbs');
const path = require('path')
const app = express();


app.set('view engine','hbs')
const PathPartials = path.join(__dirname , './partials')
hbs.registerPartials(PathPartials)


app.get('/',(req,res)=>{
    res.render("index",{
        title : "home page"
    })
})
app.get('/about',(req,res)=>{
    res.render("about",{
        title : "About page"
    })
})
app.get('/contact',(req,res)=>{
    res.render("contact",{
        title : "Contact page"
    })
})
app.get('/help',(req,res)=>{
    res.render("help",{
        title : "Help page"
    })
})
app.get('*',(req,res)=>{
    res.render("404",{
        title : "404 Error"
    })
})

app.listen(3000,()=>{
    console.log("port is at http://localhost:3000")
})