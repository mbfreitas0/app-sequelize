const { Router } = require('express');
const routes = Router();


const product_output = require("../app/controllers/productoutput_ctrl");

//var router = require("express").Router();

// Create a new Tutorial
routes.post("/", product_output.store);

// Retrieve all product_output
routes.get("/", product_output.index);

// Retrieve a single Tutorial with id
routes.get("/:id", product_output.show);

// Update a Tutorial with id
routes.put("/:id", product_output.update);

// Delete a Tutorial with id
routes.delete("/:id", product_output.destroy);

//Delete all product_output
//router.delete("/", products.deleteAll);

module.exports = routes;
