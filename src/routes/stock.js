const { Router } = require('express');
const routes = Router();


const stock = require("../app/controllers/stock_ctrl");

//var router = require("express").Router();

// Create a new Stock
routes.post("/", stock.store);

// Retrieve all stock
routes.get("/", stock.index);

// Retrieve a single Tutorial with id
routes.get("/:id", stock.show);

// Update a Tutorial with id
routes.put("/:id", stock.update);

// Delete a Tutorial with id
routes.delete("/:id", stock.destroy);

//Delete all stock
//router.delete("/", stock.deleteAll);

module.exports = routes;
