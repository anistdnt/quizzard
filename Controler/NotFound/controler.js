const notfoundFunc = (req,res)=>{
    try {
        res.render("notfound");
    } catch (error) {
        res.render("error",{
            msg : error.message
        })
    }
}

module.exports = {notfoundFunc};