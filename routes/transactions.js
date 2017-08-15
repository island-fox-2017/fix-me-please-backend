const express = require('express');
const router = express.Router()
var transactionsController = require('../controllers/transactions');

router.get('/', transactionsController.all) //fix typo transactionsController
router.post('/', transactionsController.create) //fix typo
router.put('/:id', transactionsController.update) //fix typo
router.delete('/:id', transactionsController.delete) // fix typo

module.exports = router; //fixing Router.use() requires middleware function but got a Object
