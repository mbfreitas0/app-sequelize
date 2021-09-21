module.exports = (sequelize, Sequelize) => {
    const Stock = sequelize.define('estoques', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.BIGINT(11),
        },
        //id_produto: Sequelize.BIGINT(11),
        qtde: Sequelize.INTEGER,
        valor_unitario: Sequelize.DECIMAL(9, 2)
    }, {
        timestamps: false,
        tableName: "estoques"
    });
    Stock.associate = models => {
        Stock.belongsTo(models.entryproduct, {
            as: 'produtos',
            foreignKey: 'id_produto'
        });
    };

    return Stock;
}
