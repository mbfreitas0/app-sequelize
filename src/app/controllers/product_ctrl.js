const db = require("../models/");
const Product = db.products;
const Op = db.Sequelize.Op;

class ProductController {
  async index(req, res) {
    try {
      const products = await Product.findAll();

      return res.json(products);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const products = await Product.findByPk(req.params.id);

      return res.json(products);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const products = await Product.create(req.body);

      return res.json(products);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const products = await Product.findByPk(req.params.id);

      await products.update(req.body);

      return res.json({ products });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const products = await Product.findByPk(req.params.id);

      await products.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ProductController();