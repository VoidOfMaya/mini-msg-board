const {Router}= require('express');
const {getAllMsgs,getMsgById, submitForm} = require('../controllers/indexController')

const indexRouter =Router();
//get
indexRouter.get('/',getAllMsgs)
indexRouter.get('/',getMsgById)
//post
indexRouter.post('/new',submitForm)

module.exports = indexRouter;