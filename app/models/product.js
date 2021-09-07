module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(11),
      },
      status: DataTypes.STRING(1),
      descricao: DataTypes.STRING,
      estoque_min: DataTypes.INTEGER,
      estoque_max: DataTypes.INTEGER,
      },{
      tableName: "produtos"
    });
    produtos.associate = function(models) {
      product.hasOne(models.entryproduct,{
       as:'entrada_produtos',
       foreignKey:'id'
      });
    };
  
    return Product;
  }
  