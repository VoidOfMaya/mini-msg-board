const {Router}= require('express');
const {indexController, submitForm} = require('../controllers/indexController')

const indexRouter =Router();
//get
indexRouter.get('/',indexController)
//post
indexRouter.post('/new',submitForm)

module.exports = indexRouter;