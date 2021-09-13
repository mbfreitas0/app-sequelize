const db = require("../config/db.config.js");
const EntryProduct = db.entryproduct;

// Post a Product
exports.create = (req, res) => {
  // Save to MySQL database
  EntryProduct.create({
    id_produto: req.body.id_produto,
    qtde: req.body.qtde,
    valor_unitario: req.body.valor_unitario,
    data_entrada: req.body.data_entrada,
  }).then((entryproduct) => {
    res.status(200).json({
      status: true,
      message: "Entry created successfully",
    });
  });
};

// Get all entry product
exports.findAll = (req, res) => {
  EntryProduct.findAll().then((entryproduct) => {
    // Send all entryproduct as response
    res.status(200).json({
      status: true,
      data: entryproduct,
    });
  });
};

// Find a entryproduct by Id
exports.findByPk = (req, res) => {
  EntryProduct.findByPk(req.params.id).then((entryproduct) => {
    res.status(200).json({
      status: true,
      data: entryproduct,
    });
  });
};

// Update a entryproduct
exports.update = (req, res) => {
  const id = req.params.id;
  EntryProduct.update(
    {
      id_produto: req.body.id_produto,
      qtde: req.body.qtde,
      valor_unitario: req.body.valor_unitario,
      data_entrada: req.body.data_entrada,
    },
    { where: { id: req.params.id } }
  ).then(() => {
    res.status(200).json({
      status: true,
      message: "Entry Product updated successfully with id = " + id
    });
  });
};

// Delete a product by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  EntryProduct.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).json({
      status: true,
      message: "Entry Product deleted successfully with id = " + id
    });
  });
};
