const jwt = require('jsonwebtoken');
const privateKey = process.env.SECRET_KEY;
const {QuizSchema} = require("../../Database/connect");
const mongoose = require("mongoose");
const { options } = require('../../Rouer/Home/route');


const resultFunc = async(req, res) => {
    try {
        var submittedData;
        const {token} = req.query
        if (token) {
            jwt.verify(token, privateKey, (err, decoded) => {
                if (err) {
                    throw Error('Failed to authenticate token')
                } else {
                    submittedData = decoded;
                }
            });
        } else {
            throw Error('No token provided')
        }
        // console.log(submittedData)

        const {qtype,domain,useranswer} = submittedData ;

        const quiz = mongoose.model("Quizdata",QuizSchema);
        const data = await quiz.find({qtype:qtype,domain:domain},{qname:1,answer:1,options:1,_id:0});

        console.log(data)
        const result = []
        let marks = 0
        const inc_keys = Object.keys(useranswer)
        for(const qs of inc_keys){
            let individualElement = data.filter((item)=>{return item.qname===qs})
            // console.log(useranswer)
            if(useranswer[qs]===individualElement[0]['answer']){
                var new_obj = {
                    qname:individualElement[0]['qname'],
                    options:individualElement[0]['options'],
                    answer:individualElement[0]['answer'],
                    u_answer:useranswer[qs],
                    status : true
                }
                marks+=1;
            }else{
                var new_obj = {
                    qname:individualElement[0]['qname'],
                    options:individualElement[0]['options'],
                    answer:individualElement[0]['answer'],
                    u_answer:useranswer[qs],
                    status : false
                }
            }
            result.push(new_obj);
        }
        
        console.log(result)
        
        res.render("result", {
            quizdata: [
                {
                    id: 1,
                    qtype: "easy",
                    domain: "technical",
                    qname: "Javascript is ____ in nature?",
                    options: ["Asynchronous", "Synchronous", "Multithreaded", "Single Threaded"],
                    answer: "Asynchronous",
                    useranswer : "Synchronous",
                    status : false
                },
                {
                    id: 2,
                    qtype: "intermediate",
                    domain: "aptitude",
                    qname: "Javascript is ____ in nature?",
                    options: ["Asynchronous", "Synchronous", "Multithreaded", "Single Threaded"],
                    answer: "Asynchronous",
                    useranswer : "Asynchronous",
                    status : true
                }
            ]
        });
    } catch (error) {
        res.status(404).render("error", {
            msg: error.message
        })
    }
}

module.exports = { resultFunc }
