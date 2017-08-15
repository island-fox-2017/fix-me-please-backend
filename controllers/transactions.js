const Transaction = require('../models/Transaction') // tambah const

module.exports = {
  all: function(req, res) {
    Transaction.find(function (err, transactions) {
      if (err) {
        res.send({err: err})
      }
      res.send(transactions)
    })
  },
  create: function(req, res) { // typo 'create' jadi craete
    var transaction = new Transaction(req.body);
    Transaction.save(function (err, result) {  // 't' dari transactions
      if (err) {
        res.send({err: err})
      } else {
        res.send(result)
      }
      res.send(result)
    });
  },
  update: function(req, res) {
    Transaction.update({ _id: req.id }, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  delete: function(req, res) {
    Transaction.remove({ _id: req.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    }) // tutup kurung ')' sebelumnya ada di baris bawah
  }  // unexpected semicolon (;)
}
