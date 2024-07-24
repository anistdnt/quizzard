const express = require("express");
require("dotenv").config();
const app = express();
const {engine} = require("express-handlebars");
const home = require("./Rouer/Home/route");
const port = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use("/",home);

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