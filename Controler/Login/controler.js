const {UserSchema} = require("../../Database/connect");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const privateKey = process.env.SECRET_KEY;



const loginFunc = (req,res)=>{
    try {
        res.render("login");
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

const loginPostFunc = async (req,res)=>{
    try {
        const logindata = req.body
        const user = mongoose.model("Userdata",UserSchema)
        const loginstatus = await user.find(logindata,{_id:0,__v:0})
        if(loginstatus.length === 0){
            res.redirect("/login");
        }else{
            const loginCookieToken = jwt.sign(loginstatus[0].toJSON(),process.env.SECRET_KEY,{expiresIn:'24hr'})
            res.cookie('user',loginCookieToken,{maxAge:172800000}).redirect("/");
        }
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}



module.exports = {loginFunc,loginPostFunc};