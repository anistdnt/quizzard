
const startquizFunc = (req,res)=>{
    try {
        const {auth} = req.query;
        const {user} = req.cookies;
        if(auth==="1"){
            if(user){
                res.render("startquiz")
            }else{
                throw Error("Error occured while getting userinfo");
            }
        }else{
            throw Error("Not an authentic user")
        }
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

const startquizPostFunc = (req,res)=>{
    try {
        const {username,domain,qtype} = req.body;
        const uname = Buffer.from(username).toString("base64");
        res.redirect(`/exam?auth=1&username=${uname}&domain=${domain}&qtype=${qtype}`);
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

module.exports = {startquizFunc,startquizPostFunc};