const resultFunc = (req, res) => {
    try {
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
            msg: error
        })
    }
}

module.exports = { resultFunc }
