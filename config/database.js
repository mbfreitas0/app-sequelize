module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "mbf190377",
  DB: "store",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};