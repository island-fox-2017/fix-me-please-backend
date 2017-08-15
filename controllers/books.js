const Book = require('../models/Book')
module.exports = {
  all: function(req, res) {
    Book.find(function (err, books) {
      if (err) {
        res.send({err: err})
      }
      res.send(books)
    })
  },
  create: function(req, res) {
    var book = new Book(req.body);
    book.save(function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  update: function(req, res) {
    Book.update({
      _id: req.params.id
    }, {
      $set: {
        title: req.body.title,
        author: req.body.author,
        stock: req.body.stock
      }
    }, (err,result) => {
      if(err) res.send(err)
      res.send(result)
    })

  },
  delete: function(req, res) {
    Book.remove({ _id: req.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  }
}
