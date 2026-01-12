const {messages} = require('../db')

async function getAllMsgs(req, res){
    res.render('index', {link: "/new",title: "Mini Messageboard", messages: messages});
}
async function getMsgById(req, res){
    const id = req.params.id;
    const message = messages.find(msg => msg.id.toString() === id)
    res.render('message', {message: message});
    

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