const express = require('express');
//const ejs = require('ejs');
const ejsLayout = require('express-ejs-layouts');
const path =require('path');
const mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
const homeRoutes = require('./routes/home-route');
var indexRouter = require('./routes/home-route');
//var connection  = require('./config/db.config');
const app =express();
const port=3000


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
// app.use('ejsLayout');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoutes);

app.get('/', (req,res)=>{
    res.send("hello")
});


app.listen(port, () => console.log(`app listening at http://localhost:${port}`));