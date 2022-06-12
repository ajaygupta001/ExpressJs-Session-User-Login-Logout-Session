const express = require("express");
const userCtrl = require("./controllers/userCtrl")
var multer = require("multer");
var router = express.Router();
var upload = multer();


router.use(express.urlencoded({extended:true}))
router.get('/home', function(req,res){
    if(req.session.email){
        res.render("home");
    }else{
        req.flash("message", "please Login")
        res.redirect("/login")
    }
    

})

router.get('/add', function(req,res){
    res.render("Add");

})

router.get('/login', function(req,res){
    res.render("login",{message:req.flash("message")});

})

router.get()
router.post("/login-user",upload.any(),userCtrl.loginCheck)
router.post("/add-user",upload.any(),userCtrl.addUser)
router.get("/log-out",userCtrl.logOut)





module.exports = router