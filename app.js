//note to self  node works in commonJS
//dependancies
const express = require('express');
const path = require('node:path');


//server setup
const app = express(()=>{
    console.log('booting server')
});

//ejs setup 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setting up static assets in ane xpress env
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));


//middleware setup
app.get('/', (req, res)=>{
    res.render('example', {content: 'some example content'});
})

//router setup

//listining setup

const PORT = 3000

app.listen(PORT, (err)=>{
    err? console.log(err): console.log(`Server running on port: ${PORT}`)
})
