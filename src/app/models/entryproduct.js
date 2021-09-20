const product = require('./product');

module.exports = (sequelize, Sequelize) => {
    const EntryProduct = sequelize.define('entrada_produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(11)
      },
      id_produto: Sequelize.BIGINT(11),
      qtde: Sequelize.INTEGER,
      valor_unitario: Sequelize.DECIMAL(9, 2),
      data_entrada: Sequelize.DATE
    },{
      timestamps: false,
      tableName: "entrada_produtos"
    });
    EntryProduct.associate = models => {
      entryproduct.hasMany(models.product,{
       as:'produtos',
       foreignKey:'id_produto'
      });
    };

  
    return EntryProduct;
  }