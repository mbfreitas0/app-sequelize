module.exports = app => {
    const entryproducts = require("../controllers/entryproduct_ctrl");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", entryproducts.create);
  
    // Retrieve all entryproducts
    router.get("/", entryproducts.findAll);
  
    // Retrieve all published entryproducts
    router.get("/published", entryproducts.findAllProduct);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", entryproducts.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", entryproducts.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", entryproducts.delete);
  
    // Delete all entryproducts
    router.delete("/", entryproducts.deleteAll);
  
    app.use('/api/entryproducts', router);
  };