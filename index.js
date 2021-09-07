const express = require('express');
const { Product } = require ('./app/models/product');
const { EntryProduct } = require ('./app/models/entry-product');

const app = express();

app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

Product.create({status:'A', descricao:'PONTEIRA DE BENGALA 1"', estoque_min: 5, estoque_max: 10});

app.listen(3000);
