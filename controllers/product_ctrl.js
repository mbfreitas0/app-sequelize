const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// Create a new object

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descricao) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Product
    const product = {
      status: req.body.status,
      descricao: req.body.descricao,
      estoque_min: req.body.estoque_min,
      estoque_max: req.body.estoque_max,
      
    };
  
    // Save Product in the database
    Product.create(Product)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Product."
        });
      });
  };

  // Retrieve objects (with condition)

  exports.findAll = (req, res) => {
    const descricao = req.query.descricao;
    var condition = descricao ? { descricao: { [Op.like]: `%${descricao}%` } } : null;
  
    Product.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Products."
        });
      });
  };

  // Retrieve a single object

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Product.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Product with id=" + id
        });
      });
  };

  // Find all objects by condition

exports.findAllDescription = (req, res) => {
  Product.findAll({ where: { descricao: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    });
};


  // Update an object

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Product.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Product with id=" + id
        });
      });
  };

  // Delete an object

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Product.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Product with id=" + id
        });
      });
  };



  