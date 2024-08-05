const jwt = require('jsonwebtoken');


const homeFunc = (req,res)=>{
    try {
        const loginCookieToken = req.cookies.user
        if(loginCookieToken != undefined){
            res.render('home',{
                btnlink : '/startquiz?auth=1'
            })
        }else{
            res.render('home',{
                btnlink : '/login'
            })
        }
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

module.exports = {homeFunc};
