const Sequelize = require('sequelize');
const connection = require('../../config/db.config');
const Product = require('../models/product');

module.exports = (sequelize, Sequelize) => {
    const EntryProduct = sequelize.define('entrada_produtos', {
     
      id_produto: Sequelize.INTEGER,
      qtde: Sequelize.INTEGER,
      valor_unitario: Sequelize.DECIMAL(9, 2),
      data_entrada: Sequelize.DATE
    },{
      timestamps: false,
      
     
    });
     
    return EntryProduct;
  }