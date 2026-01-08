const {messages} = require('../db')

async function getForm(req, res){
    res.render('form', {title: "Mini Messageboard", messages: messages});
    console.log('getting form')
}

module.exports ={
    getForm
}