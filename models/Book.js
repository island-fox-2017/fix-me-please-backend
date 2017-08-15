var mongoose = require('mongoose');
const Schema = mongoose.Schema

var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  //type data category
  category: String,
  stock: Number
});

//typo booksSchema menjadi bookSchema
var Book = mongoose.model('Book', bookSchema);

module.exports = Book
