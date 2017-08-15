const express = require('express');
//menambahkan tanda () di express.Router
const router = express.Router();
//typo conroller dirubah menjadi controllers
var booksController = require('../controllers/books');

router.get('/', booksController.all)
router.post('/', booksController.create)
router.put('/:id', booksController.update)
router.delete('/:id', booksController.delete)

//menambahkan module exports
module.exports = router
