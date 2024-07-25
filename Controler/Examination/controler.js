const examFunc = (req, res) => {
    try {
        res.render("examination", {
            quizdata: [
                {
                    id: 1,
                    qtype: "easy",
                    domain: "technical",
                    qname: "Javascript is ____ in nature?",
                    options: ["Asynchronous", "Synchronous", "Multithreaded", "Single Threaded"],
                    answer: "Asynchronous"
                },
                {
                    id: 2,
                    qtype: "intermediate",
                    domain: "aptitude",
                    qname: "Javascript is ____ in nature?",
                    options: ["Asynchronous", "Synchronous", "Multithreaded", "Single Threaded"],
                    answer: "Asynchronous"
                },
                {
                    id: 3,
                    qtype: "easy",
                    domain: "political and history",
                    qname: "Javascript is ____ in nature?",
                    options: ["Asynchronous", "Synchronous", "Multithreaded", "Single Threaded"],
                    answer: "Asynchronous"
                },
                {
                    id: 4,
                    qtype: "easy",
                    domain: "geography",
                    qname: "Javascript is ____ in nature?",
                    options: ["Asynchronous", "Synchronous", "Multithreaded", "Single Threaded"],
                    answer: "Asynchronous"
                }
            ]
        });
    } catch (error) {
        res.render("error", {
            msg: error.message
        })
    }
}

module.exports = { examFunc };