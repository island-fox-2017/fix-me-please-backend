const express = require('express');
const router = express.Router(); // kurang parentheses
var booksController = require('../controllers/books'); // controller. kurang 's'

router.get('/', booksController.all)
router.post('/', booksController.create)
router.put('/:id', booksController.update)
router.delete('/:id', booksController.delete)

module.exports = router;