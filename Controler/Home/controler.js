const homeFunc = (req,res)=>{
    try {
        res.render("home");
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

module.exports = {homeFunc};
