const express = require('express');
const router = express.Router()
//typo conroller dirubah menjadi controllers
var transactionController = require('../controllers/transactions');

router.get('/', transactionsController.all)
router.post('/', transactionsController.create)
router.put('/:id', transactionsController.update)
router.delete('/:id', transactionsController.delete)

//menambahkan module exports
module.exports = router
