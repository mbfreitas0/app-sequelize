// Create a new object

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descricao) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a EntryProduct
    const entryproduct = {
      id_produto: req.body.id_produto,
      qtde: req.body.qtde,
      valor_unitario: req.body.valor_unitario,
      data_entrada: req.body.data_entrada,
      
    };
  
    // Save Product in the database
    Product.create(EntryProduct)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the EntryProduct."
        });
      });
  };

  // Retrieve objects (with condition)

  exports.findAll = (req, res) => {
    const id_produto = req.query.id_produto;
    var condition = id_produto ? { id_produto: { [Op.like]: `%${id_produto}%` } } : null;
  
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

exports.findAllProduct = (req, res) => {
  Product.findAll({ where: { id_produto: true } })
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
            message: "EntryProduct was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update EntryProduct with id=${id}. Maybe Product was not found or req.body is empty!`
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
            message: `Cannot delete EntryProduct with id=${id}. Maybe Product was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Product with id=" + id
        });
      });
  };



  