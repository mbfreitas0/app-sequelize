//import { DataTypes } from "sequelize"; // Import the built-in data types
const { DataTypes } = require("sequelize");

'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('entrada_produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(11)
      },

      id_produto: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: false,
        type: Sequelize.BIGINT(11)
      },

      qtde: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      valor_unitario: {
        allowNull: true,
        type: Sequelize.DECIMAL(9, 2),
        defaultValue: 0.00
      },

      data_entrada: {
        allowNull: true,
        type: Sequelize.DATE
      },

    });
   

    down: async (queryInterface, Sequelize) =>{
      /**
       * Add reverting commands here.
       *
       * Example:
       * await queryInterface.dropTable('users');
       */
      await queryInterface.dropTable('entrada_produtos');
    }
  }
};  
