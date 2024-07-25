const startquizFunc = (req,res)=>{
    try {
        res.render("startquiz");
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

module.exports = {startquizFunc};