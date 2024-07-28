const mongoose = require("mongoose");
require("dotenv").config();

const QuizSchema = mongoose.Schema({
    id : Number,
    qtype : String,
    domain : String,
    qname : String,
    options : [String],
    answer : String
})

const DatabaseConnect = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Database connection established successfully");
    } catch (error) {
        console.log(`Database Connection Failed : ${error.message}`);
    }
}

module.exports = {QuizSchema,DatabaseConnect};