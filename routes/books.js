const express = require('express');
const router = express.Router(); //fix Router function
var booksController = require('../controllers/books'); //fix become controllers

router.get('/', booksController.all)
router.post('/', booksController.create)
router.put('/:id', booksController.update)
router.delete('/:id', booksController.delete)

module.exports = router; //fixing Router.use() requires middleware function but got a Object
