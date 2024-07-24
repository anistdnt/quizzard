const homeFunc = (req,res)=>{
    try {
        res.rendr("home");
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

module.exports = {homeFunc};