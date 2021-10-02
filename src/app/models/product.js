const Sequelize = require('sequelize');
const connection = require('../../config/db.config');
const Stock = require('../models/stock');
const EntryProduct = require('../models/entryproduct');
const ProductOutput = require('../models/product_output');

module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('produtos', {
   
    status: Sequelize.STRING(1),
    descricao: Sequelize.STRING,
    estoque_min: Sequelize.INTEGER,
    estoque_max: Sequelize.INTEGER,
  }, {
    timestamps: false,
    
  });
    
  return Product;
}
