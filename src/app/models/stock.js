module.exports = (sequelize, Sequelize) => {
    const Stock = sequelize.define('estoque', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.BIGINT(11),
        },
        id_produto: Sequelize.BIGINT(11),
        qtde: Sequelize.INTEGER,
        valor_unitario: Sequelize.DECIMAL(9, 2)
    }, {
        timestamps: false,
        tableName: "estoque"
    });
    Stock.associate = function (models) {
        Stock.hasMany(models.product, {
            as: 'produtos',
            foreignKey: 'id'
        });
    };

    return Stock;
}
