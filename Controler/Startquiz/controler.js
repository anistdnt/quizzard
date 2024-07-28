
const startquizFunc = (req,res)=>{
    try {
        res.render("startquiz");
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
        res.redirect(`/exam?username=${uname}&domain=${domain}&qtype=${qtype}`);
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

module.exports = {startquizFunc,startquizPostFunc};