const Transaction = require('../models/Transaction');

module.exports = {
  all: function(req, res) {
    Transaction.find(function (err, transactions) {
      if (err) {
        res.send({err: err});
      }
      res.send(transactions);
    });
  },
  //typo create
  create: function(req, res) {
    var transaction = new Transaction(req.body);
    transaction.save(function (err, result) {
      if (err) {
        res.send({err: err})
      }
      //menghilangkan else
      res.send(result)
    });
  },
  update: function(req, res) {
    //menambahkan params
    Transaction.update({ _id: req.params.id }, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  delete: function(req, res) {
    //menambahkan params
    Transaction.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
      //menambahkan tanda )
    });
    //menghilangkan tanda )
  }
}
