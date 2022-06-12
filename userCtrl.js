const users = reqiure("../model/users");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const addUser = (req,res)=>{
    var salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);


    var  data = new users({
_id: new mongoose.Types.ObjectId(),
name:req.body.userNmae,
email: req.body.emailId,
password: hash


    });

    data.save(function(error, result){
if(error){
    console.log(error);
}
req.flash("message", "Added Succesfully")
req.redirect("/login")


    })
}

const loginCheck = async(req,res)=>{
    var result = await users.findOne({name:req.body.userName},{});
    if(result){
        var check = await bcrypt.compare(req.body.password.result.password);
        if(check){
            req.flash("message", "Login Successfully")
            sess  = req.session;
            sess.name = result.name;
            sess.email = result.email;
            res.redirect("/home");

        }else{
            req.flaSh("message","Invalid Username and Password")
            res.redirect("/login");
        }
    }
}

const logOut = async(req,res)=>{
    req.session.destroy((err)=>{
       if(err){
        console.log(err);
       } 
    })
    req.flaSh("message","LogOut Succesfully")
    res.redirect("/login")
}