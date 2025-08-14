const express = require('express')
const router = express.Router();
const userController = require('../Controllers/userController')
const bookController = require('../Controllers/bookController')

// register

router.post('/register',userController.registerController);

// register

router.post('/login',userController.loginController);

// addbook

router.post('/addbook',bookController.addBooksController);

// getallbook

router.get('/getbook',bookController.getAllBooks);

// getbookbyid

router.get('/getbook/:id',bookController.getBooksById);

// gethomebook

router.get('/home/getbook',bookController.getHomeBooks);

// addreview

router.post('/getbook/:id/addreview',bookController.addReview);

// getreview

router.get('/:id/getreview',bookController.getReview);


module.exports=router;