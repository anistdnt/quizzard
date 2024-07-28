const {QuizSchema} = require("../../Database/connect");
const mongoose = require("mongoose");

const examFunc = async(req, res) => {
    try {
        const {username,domain,qtype} = req.query;
        if(username===undefined || domain===undefined || qtype===undefined){
            throw Error("Unwanted reload to the exam page");
        }else{
            var uname = Buffer.from(username,"base64").toString("utf-8")
            const quiz = mongoose.model("Quizdata",QuizSchema);
            const data = await quiz.find({qtype:qtype,domain:domain});

            for (let i = data.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [data[i], data[j]] = [data[j], data[i]];
            }
            var final_data = data.slice(0, 10);
        }
        res.render("examination", {
            username : uname,
            domain : domain.charAt(0).toUpperCase() + domain.slice(1),
            qtype : qtype.charAt(0).toUpperCase() + qtype.slice(1),
            quizdata: final_data
        });
    } catch (error) {
        res.render("error", {
            msg: error.message
        })
    }
}

module.exports = { examFunc };