const { Router } = require('express');
const routes = Router();


const products = require("../app/controllers/product_ctrl");

//var router = require("express").Router();

// Create a new Tutorial
routes.post("/ ", products.store);

// Retrieve all products
routes.get("/", products.index);

// Retrieve a single Tutorial with id
routes.get("/:id", products.show);

// Update a Tutorial with id
routes.put("/:id", products.update);

// Delete a Tutorial with id
routes.delete("/:id", products.destroy);

//Delete all products
//router.delete("/", products.deleteAll);

module.exports = routes;
