const {messages} = require('../db')

async function indexController(req, res){
    res.render('index', {link: "/new",title: "Mini Messageboard", messages: messages});
}

module.exports ={
    indexController
}