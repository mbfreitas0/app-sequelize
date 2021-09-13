module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('produtos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT(11),
    },
    status: Sequelize.STRING(1),
    descricao: Sequelize.STRING,
    estoque_min: Sequelize.INTEGER,
    estoque_max: Sequelize.INTEGER,
  }, {
    tableName: "produtos"
  });
  Product.associate = function (models) {
    Product.hasOne(models.entryproduct, {
      as: 'entrada_produtos',
      foreignKey: 'id'
    });
  };

  return Product;
}
