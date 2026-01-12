const {messages} = require('../db')

async function getAllMsgs(req, res){
    res.render('index', {link: "/new",title: "Mini Messageboard", messages: messages});
}
async function getMsgById(req, res){
    res.render('message', {link: "/", messages: messages});
}
async function submitForm(req, res){
    const {user, msg}= req.body;
    messages.push({    text: msg,user: user,added: new Date() });
    res.redirect('/');
}
module.exports ={
    getAllMsgs,
    getMsgById,
    submitForm
}