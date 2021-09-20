const db = require("../models/");
const EntryProduct = db.entryproducts;
const Product = db.products;
const Op = db.Sequelize.Op;

class EntryProductController {
  async index(req, res) {
    try {
      const entryproducts = await EntryProduct.findAll();

      return res.json(entryproducts);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const entryproducts = await EntryProduct.findByPk(req.params.id);

      return res.json(entryproducts);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const entryproducts = await EntryProduct.create(req.body);

      return res.json(entryproducts);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const entryproducts = await EntryProduct.findByPk(req.params.id);

      await entryproducts.update(req.body);

      return res.json({ entryproducts });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const entryproducts = await EntryProduct.findByPk(req.params.id);

      await entryproducts.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new EntryProductController();