module.exports = (sequelize, Sequelize) => {
    const EntryProduct = sequelize.define('entrada_produto', {
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
      tableName: "entrada_produtos"
    });
    EntryProduct.associate = function(models) {
      entryproduct.belongsTo(models.product,{
       as:'produtos',
       foreignKey:'id_produto'
      });
    };

  
    return EntryProduct;
  }