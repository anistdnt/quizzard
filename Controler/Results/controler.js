const jwt = require('jsonwebtoken');
const privateKey = process.env.SECRET_KEY;


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
        console.log(submittedData)
        
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
