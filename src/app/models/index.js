const dbConfig = require("../../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("../models/product")(sequelize, Sequelize);
db.entryproducts = require("../models/entryproduct")(sequelize, Sequelize);
db.stocks = require("../models/stock")(sequelize, Sequelize);
db.products_output = require("../models/product_output")(sequelize, Sequelize);

db.products.belongsToMany(db.entryproducts, {
  through: "entryproducts",
  foreignKey: "id_produto",
  otherKey: "id"
});
db.products.belongsToMany(db.stocks, {
  through: "stocks",
  foreignKey: "id_produto",
  otherKey: "id"
});
db.products.belongsToMany(db.products_output, {
  through: "products_output",
  foreignKey: "id_produto",
  otherKey: "id"
});
db.entryproducts.belongsToMany(db.products, {
  through: "products",
  foreignKey: "id_produto",
  otherKey: "id"
});
db.stocks.belongsToMany(db.products, {
  through: "products",
  foreignKey: "id_produto",
  otherKey: "id"
});

module.exports = db;
