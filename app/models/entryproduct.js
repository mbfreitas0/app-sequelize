module.exports = (sequelize, DataTypes) => {
    const entryproduct = sequelize.define('entrada_produto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(11)
      },
      id_produto: DataTypes.BIGINT(11),
      qtde: DataTypes.INTEGER,
      valor_unitario: DataTypes.DECIMAL(9, 2),
      data_entrada: DataTypes.DATE
    },{
      tableName: "entrada_produtos"
    });
    entryproduct.associate = function(models) {
      entryproduct.belongsTo(models.product,{
       as:'produtos',
       foreignKey:'id_produto'
      });
    };

  
    return EntryProduct;
  }