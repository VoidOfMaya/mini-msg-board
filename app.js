//note to self  node works in commonJS
//dependancies
require('dotenv').config();
const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const {main} = require('./db/seeddb.js')

//server setup
const app = express(()=>{
    console.log('booting server')
});

main();

//ejs setup 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setting up static assets in ane xpress env
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));


//middleware setup
//parse form data to a request body
app.use(express.urlencoded({extended: true}))
//router setup

app.use('/', indexRouter)
app.use('/new', indexRouter)
app.use('/message',indexRouter)
//error handeling
app.use((req, res)=>{
    res.render('404')
})

//listining setup

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err)=>{
    if(err) throw new err ;
    console.log(`Server running on port: ${PORT}`);
})
