const express = require('express');
const router = express.Router()
//typo conroller dirubah menjadi controllers
var transactionController = require('../controllers/transactions');

router.get('/', transactionController.all)
router.post('/', transactionController.create)
router.put('/:id', transactionController.update)
router.delete('/:id', transactionController.delete)

//menambahkan module exports
module.exports = router
