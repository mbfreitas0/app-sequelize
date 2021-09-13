const env = require("./database.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.Product = require("../app/models/product.js")(sequelize, Sequelize);
db.EntryProduct = require("../app/models/entryproduct.js")(sequelize, Sequelize);

module.exports = db;