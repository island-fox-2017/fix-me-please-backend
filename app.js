const express = require('express');
const app = express(); //fixing app.use
const bodyParser = require('body-parser'); //add module bodyParser

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var books = require('./routes/books'); //fix routes
var transactions = require('./routes/transactions'); //fix routes

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
