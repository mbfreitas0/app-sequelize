const db = require("../config/db.config.js");
const Product = db.product;

// Post a Product
exports.create = (req, res) => {
  // Save to MySQL database
  Product.create({
    status: req.body.status,
    descricao: req.body.descricao,
    estoque_min: req.body.estoque_min,
    estoque_max: req.body.estoque_max,
  }).then((product) => {
    res.status(200).json({
      status: true,
      message: "Product created successfully",
    });
  });
};

// Get all products
exports.findAll = (req, res) => {
  Product.findAll().then((product) => {
    // Send all product as response
    res.status(200).json({
      status: true,
      data: product,
    });
  });
};

// Find a product by Id
exports.findByPk = (req, res) => {
  Product.findByPk(req.params.id).then((product) => {
    res.status(200).json({
      status: true,
      data: product,
    });
  });
};

// Update a product
exports.update = (req, res) => {
  const id = req.params.id;
  Product.update(
    {
      status: req.body.status,
      descricao: req.body.descricao,
      estoque_min: req.body.estoque_min,
      estoque_max: req.body.estoque_max,
    },
    { where: { id: req.params.id } }
  ).then(() => {
    res.status(200).json({
      status: true,
      message: "Product updated successfully with id = " + id
    });
  });
};

// Delete a product by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  Product.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).json({
      status: true,
      message: "Product deleted successfully with id = " + id
    });
  });
};
