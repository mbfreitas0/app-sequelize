const { DATE } = require('sequelize');
const Sequelize = require('sequelize');
const connection = require('../../config/db.config');
const Product = require('./product');

module.exports = (sequelize, Sequelize) => {
    const ProductOutput = sequelize.define('saida_produtos', {
     
      id_produto: Sequelize.INTEGER,
      qtde: Sequelize.INTEGER,
      data_saida: Sequelize.DATE,
      valor_unitario: Sequelize.DECIMAL(9, 2),
      
    },{
      timestamps: false,
      
     
    });
    

  
    return ProductOutput;
  }