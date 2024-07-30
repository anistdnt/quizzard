const {UserSchema} = require("../../Database/connect");
const mongoose = require("mongoose");


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
            res.redirect("/?auth=1");
        }
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}



module.exports = {loginFunc,loginPostFunc};