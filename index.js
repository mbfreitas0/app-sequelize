const express = require('express');
const { product } = require ('./app/models/product');
const { entryproduct } = require ('./app/models/entryproduct');
//Rotas
const rotaProduct = require('./routes/product');
const rotaEntryproduct = require('./routes/entryproduct');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/product", rotaProduct(express));
app.use("/entryproduct", rotaEntryproduct(express));


Product.create({status:'A', descricao:'PONTEIRA DE BENGALA 1"', estoque_min: 5, estoque_max: 10});

app.listen(3000);
