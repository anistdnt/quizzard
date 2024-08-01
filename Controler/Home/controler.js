const jwt = require("jsonwebtoken");

const homeFunc = (req,res)=>{
    try {
        const {user} = req.cookie;
        if(user){
            jwt.verify(user,process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    throw Error('Failed to authenticate token')
                } else {
                    submittedData = decoded;
                }
            });
        }

        res.render("home");
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

module.exports = {homeFunc};
