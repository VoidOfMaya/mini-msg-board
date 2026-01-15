const postgres = require('../db/queries')
const { body , query ,validateResult, matchData} = require('express-validation');

async function getAllMsgs(req, res){

    const messages = await postgres.getAllMsgs();
    res.render('index', {link: "/new",title: "Mini Messageboard", messages: messages});
}
async function getMsgById(req, res){
    const id = req.params.id;
    const message = await postgres.getMsgById(id);
    res.render('message', {message: message});

}
async function submitForm(req, res){
    const {user, msg}= req.body;
    await postgres.createNewMsg({username : user,text: msg})
    res.redirect('/');
}
module.exports ={
    getAllMsgs,
    getMsgById,
    submitForm
}