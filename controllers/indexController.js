const postgres = require('../db/queries')
const {validationResult, matchedData } = require('express-validator');
async function getAllMsgs(req, res){

    const messages = await postgres.getAllMsgs();
    res.render('index', {link: "/new",title: "Mini Messageboard", messages: messages});
}
async function getMsgById(req, res){

    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {id} = matchedData(req);

    const message = await postgres.getMsgById(id);
    res.render('message', {message: message});
    
}
//.post use body
async function submitForm(req, res){  
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {user, msg} = matchedData(req);
    await postgres.createNewMsg({username : user,text: msg})
    res.redirect('/');

}
module.exports ={
    getAllMsgs,
    getMsgById,
    submitForm
}