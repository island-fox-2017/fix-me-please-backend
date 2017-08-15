const express = require('express');
const router = express.Router()
var transactionsController = require('../controllers/transactions'); // kurang 's' di controller (require) dan transactionsController

router.get('/', transactionsController.all)
router.post('/', transactionsController.create)
router.put('/:id', transactionsController.update)
router.delete('/:id', transactionsController.delete)

module.exports = router;