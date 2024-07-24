const express = require('express')
const app = express()
const port = 8000
const home = require('./Rouer/Home/route.js')
const engine = require('express-handlebars')

app.engine('handlebars', engine.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/home',home)

app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})