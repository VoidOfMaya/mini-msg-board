const {Router}= require('express');
const {getForm} = require('../controllers/formController')

const formRouter =Router();
//get
formRouter.get('/',getForm);

module.exports = formRouter;