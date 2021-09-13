module.exports = app => {
  const products = require("../controllers/product_ctrl");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/product", products.create);

  // Retrieve all products
  router.get("/product", products.findAll);

  // Retrieve a single Tutorial with id
  router.get("/product:id", products.findByPk);

  // Update a Tutorial with id
  router.put("/product:id", products.update);

  // Delete a Tutorial with id
  router.delete("/product:id", products.delete);

  //Delete all products
  //router.delete("/", products.deleteAll);

  app.use('/products', router);
};