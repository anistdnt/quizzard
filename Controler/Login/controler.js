const {UserSchema} = require("../../Database/connect");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


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
        const loginstatus = await user.find(logindata)
        if(loginstatus.length === 0){
            res.redirect("/login");
        }else{
            const mycookietoken = jwt.sign(loginstatus[0],process.env.SECRET_KEY,{expiresIn:'24hr'})

            res.cookie(user,mycookietoken,{maxAge:172800000}).redirect("/");
        }
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}



module.exports = {loginFunc,loginPostFunc};