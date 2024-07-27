const resultFunc = (req,res)=>{
    try {
        res.render("result");
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

module.exports = {resultFunc};
