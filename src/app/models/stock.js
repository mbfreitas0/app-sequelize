const Sequelize = require('sequelize');
const connection = require('../../config/db.config');
const Product = require('../models/product');

module.exports = (sequelize, Sequelize) => {
    const Stock = sequelize.define('estoques', {
        
        id_produto: Sequelize.INTEGER,
        qtde: Sequelize.INTEGER,
        valor_unitario: Sequelize.DECIMAL(9, 2)
    }, {
        timestamps: false,
        
       
    });
   

    return Stock;
}
