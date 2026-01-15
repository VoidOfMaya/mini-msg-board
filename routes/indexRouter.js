const {Router}= require('express');
const {getAllMsgs,getMsgById, submitForm} = require('../controllers/indexController')
const { body , param } = require('express-validator');
const indexRouter =Router();
//get
indexRouter.get('/',getAllMsgs)


// .get use query
const validateId = [param(':id').notEmpty().isNumeric().withMessage('id not valid check db')]
indexRouter.get('/message/:id',validateId,getMsgById)
//post
const validateMsg = [body('user').trim().notEmpty().withMessage('please enter a name')
                     .isAlphanumeric().isLength({min: 2, max:12}).withMessage('name must be between 2-12 characters'),
                     body('msg').notEmpty().withMessage('please enter a message')
                     .isLength({min: 1, max:250}).withMessage('message length out of bounds')
                    ]
indexRouter.post('/new',validateMsg,submitForm)

module.exports = indexRouter;