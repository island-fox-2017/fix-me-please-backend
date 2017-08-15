const express = require('express');
const router = express.Router()
var transactionController = require('../controllers/transactions');

router.get('/', transactionController.all) //fix typo transactionController
router.post('/', transactionController.create) //fix typo
router.put('/:id', transactionController.update) //fix typo
router.delete('/:id', transactionController.delete) // fix typo
