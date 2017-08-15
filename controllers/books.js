const Book = require('../models/Book') // tambah const Book

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
    // var book = new Book(req.body);
    // var book = {
    //   isbn: req.body.isbn,
    //   title: req.body.title,
    //   author: req.body.author,
    //   category: req.body.author,
    //   stock: req.body.stock
    // }
    Book.save(book, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  update: function(req, res) {
    Book.update({ _id: req.params.id }, {  // req.body diganti params.id
      $push: req.body // set diganti push
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  delete: function(req, res) {
    Book.remove({ _id: req.params.id }, function (err, result) { // req.body diganti params.id
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  }
}
