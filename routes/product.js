module.exports = app => {
  const products = require("../controllers/product_ctrl");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", products.create);

  // Retrieve all products
  router.get("/", products.findAll);

  // Retrieve all published products
  router.get("/published", products.findAllDescription);

  // Retrieve a single Tutorial with id
  router.get("/:id", products.findOne);

  // Update a Tutorial with id
  router.put("/:id", products.update);

  // Delete a Tutorial with id
  router.delete("/:id", products.delete);

  // Delete all products
  //router.delete("/", products.deleteAll);

  app.use('/products', router);
};