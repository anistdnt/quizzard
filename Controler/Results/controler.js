const jwt = require('jsonwebtoken');
const privateKey = process.env.SECRET_KEY;
const { QuizSchema } = require("../../Database/connect");
const mongoose = require("mongoose");
const { options } = require('../../Rouer/Home/route');


const resultFunc = async (req, res) => {
    try {
        const { auth } = req.query;
        const { user } = req.cookies;
        if (auth === "1") {
            if (user) {

                var submittedData;
                const { token } = req.query
                if (token) {
                    jwt.verify(token, privateKey, (err, decoded) => {
                        if (err) {
                            throw Error('Failed to authenticate token')
                        } else {
                            submittedData = decoded;
                        }
                    });
                } else {
                    const { predatatoken } = req.query;
                    if (predatatoken) {
                        jwt.verify(predatatoken, privateKey, (err, decoded) => {
                            if (err) {
                                throw Error('Failed to authenticate token')
                            } else {
                                submittedData = decoded;
                            }
                        });

                        res.render("result", {
                            quizdata: submittedData
                        });

                    } else {
                        throw Error('No token provided')
                    }
                }
                // console.log(submittedData)

                const { qtype, domain, useranswer } = submittedData;

                const quiz = mongoose.model("Quizdata", QuizSchema);
                const data = await quiz.find({ qtype: qtype, domain: domain }, { qname: 1, answer: 1, options: 1, _id: 0 });

                const result = []
                var marks = 0
                const inc_keys = Object.keys(useranswer)
                for (const qs of inc_keys) {
                    let individualElement = data.filter((item) => { return item.qname === qs })
                    if (useranswer[qs] === individualElement[0]['answer']) {
                        var new_obj = {
                            qname: individualElement[0]['qname'],
                            options: individualElement[0]['options'],
                            answer: individualElement[0]['answer'],
                            u_answer: useranswer[qs],
                            status: true
                        }
                        marks += 1;
                    } else {
                        var new_obj = {
                            qname: individualElement[0]['qname'],
                            options: individualElement[0]['options'],
                            answer: individualElement[0]['answer'],
                            u_answer: useranswer[qs],
                            status: false
                        }
                    }
                    result.push(new_obj);
                }

                // console.log(result)

                const new_result_obj = {
                    username: submittedData.username,
                    qtype: submittedData.qtype.charAt(0).toUpperCase() + submittedData.qtype.slice(1),
                    domain: submittedData.domain.charAt(0).toUpperCase() + submittedData.domain.slice(1),
                    marks: marks,
                    wrong_answer: (10 - marks),
                    results: result
                }

                // console.log(new_result_obj)

                const mycookietoken = jwt.sign(new_result_obj, process.env.SECRET_KEY, { expiresIn: '24hr' })

                res.cookie(domain, mycookietoken, { maxAge: 172800000 }).render("result", {
                    quizdata: new_result_obj
                });

            } else {
                throw Error("Error occured while fetching result")
            }
        } else {
            throw Error("Authentication failed")
        }
    } catch (error) {
        res.status(404).render("error", {
            msg: error.message
        })
    }
}

module.exports = { resultFunc }
