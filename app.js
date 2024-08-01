// importing all required libraries
const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// importing external connection functions
const {DatabaseConnect} = require("./Database/connect");
const {engine} = require("express-handlebars");

//importing pages
const home = require("./Rouer/Home/route");
const startquiz = require("./Rouer/Startquiz/route");
const exam = require("./Rouer/Examination/route");
const result = require("./Rouer/Results/route");
const prev = require("./Rouer/Previous/route");
const notfound = require("./Rouer/NotFound/route");
const login = require("./Rouer/Login/route");
const signup = require("./Rouer/Signup/route");

//port
const port = process.env.PORT || 3000;


//congiguring engine and views
app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// using external third party functionalities
app.use(express.static(path.join(__dirname,"Assets")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())
app.use(bodyParser.json());

// using page routes
app.use("/",home);
app.use("/startquiz",startquiz);
app.use("/exam",exam);
app.use("/result",result);
app.use("/prev",prev);
app.use("/login",login);
app.use("/signup",signup);
app.use("*",notfound);


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
