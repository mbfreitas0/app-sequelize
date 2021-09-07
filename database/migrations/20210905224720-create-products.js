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
    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(11),
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(1)
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING
      },

      estoque_min: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      estoque_max: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

    });
  },


  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('produtos');
  }
};
