module.exports = app => {
    const entryproducts = require("../controllers/entryproduct_ctrl");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", entryproducts.create);
  
    // Retrieve all entryproducts
    router.get("/", entryproducts.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", entryproducts.findByPk);
  
    // Update a Tutorial with id
    router.put("/:id", entryproducts.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", entryproducts.delete);
  
      
    app.use('/entryproducts', router);
  };