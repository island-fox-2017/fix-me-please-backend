var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  // change to string.. optional.. 
  stock: Number
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book
