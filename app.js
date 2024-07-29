const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const {DatabaseConnect} = require("./Database/connect");
const {engine} = require("express-handlebars");
const home = require("./Rouer/Home/route");
const startquiz = require("./Rouer/Startquiz/route");
const exam = require("./Rouer/Examination/route");
const result = require("./Rouer/Results/route");
const prev = require("./Rouer/Previous/route");
const port = process.env.PORT || 3000;

app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname,"Assets")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())
app.use(bodyParser.json());
app.use("/",home);
app.use("/startquiz",startquiz);
app.use("/exam",exam);
app.use("/result",result);
app.use("/prev",prev);
app.use("/result",result);

app.get("/",(req,res)=>{
    res.cookie(domain,"hello",{maxAge:10000}).render()
})

const start = async()=>{
    try {
        await DatabaseConnect();
        app.listen(port,()=>{
            console.log(`Application started at port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
