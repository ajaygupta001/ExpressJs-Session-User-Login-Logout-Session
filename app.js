const express = require("express");
const app = express();
const port =2000;
const path = require("path");
const session = requir("express-session")


app.use(session({
    secret: 'asiudmprbdooirnfowqjkfghutbcwxztypfjkv',
    resave: false,
    saveUninitialized: false
}))

app.use('/home',require('./route'));
app.use('/add',require('./route'));
app.use('/login',require('./route'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));



app.listen(port,function(){
    console.log("Server is listening");
})