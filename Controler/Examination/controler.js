const examFunc = (req,res)=>{
    try {
        res.render("examination");
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

module.exports = {examFunc};