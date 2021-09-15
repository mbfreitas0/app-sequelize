const { Router } = require('express');
const routes = Router();

const entryproducts = require("../app/controllers/entryproduct_ctrl");

//var router = require("express").Router();

// Create a new Tutorial
routes.post("/ ", entryproducts.create);

// Retrieve all entryproducts
routes.get("/", entryproducts.findAll);

// Retrieve a single Tutorial with id
routes.get("/:id", entryproducts.findByPk);

// Update a Tutorial with id
routes.put("/:id", entryproducts.update);

// Delete a Tutorial with id
routes.delete("/:id", entryproducts.delete);

//Delete all products
//router.delete("/", products.deleteAll);

module.exports = routes;