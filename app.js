const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const {engine} = require("express-handlebars");
const home = require("./Rouer/Home/route");
const startquiz = require("./Rouer/Startquiz/route");
const exam = require("./Rouer/Examination/route");
const port = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname,"Assets")));
app.use("/startquiz",startquiz);
app.use("/",home);
app.use("/exam",exam);

const start = async()=>{
    try {
        app.listen(port,()=>{
            console.log(`Application started at port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
