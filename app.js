const express = require('express');
//menambahkan body parser
const bodyParser = require('body-parser')
//kurang tanda ()
const app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

//menggunakan body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//manambahkan path untuk routes books dan transactions
var books = require('./routes/books');
var transactions = require('./routes/transactions');

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
