const {messages} = require('../db')

async function indexController(req, res){
    res.render('index', {messages: messages});
}

module.exports ={
    indexController
}