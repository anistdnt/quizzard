const prevFunc = (req,res)=>{
    try {
        res.render("previous");
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

module.exports = {prevFunc};
