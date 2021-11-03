const express = require('express');
//const ejs = require('ejs');
const ejsLayout = require('express-ejs-layouts');
const path =require('path');
//const homeRoutes = require('./routes/home-route');
var indexRouter = require('./routes/home-route');
const app =express();
const port=3000

app.use('ejsLayout');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoutes.routes);

app.get('/', (req,res)=>{
    res.send("hello")
});


app.listen(port, () => console.log(`app listening at http://localhost:${port}`));