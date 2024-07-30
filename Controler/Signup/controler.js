const {UserSchema} = require("../../Database/connect");
const mongoose = require("mongoose");


const signupFunc = (req,res)=>{
    try {
        res.render("signup");
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

const signupPostFunc = async (req,res)=>{
    try {
        const signupData = req.body
        const user = mongoose.model("Userdata",UserSchema)
        await user.create(signupData)
        res.redirect("/login");
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

module.exports = {signupFunc,signupPostFunc};