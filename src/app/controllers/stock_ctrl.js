const db = require("../models/");
const Stock = db.stock;
const Op = db.Sequelize.Op;

class StockController {
  
    // Retorna todos os itens do Estoque
    async index(req, res) {
    try {
      const stock = await Stock.findAll();

      return res.json(stock);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

// Retorna um item de Estoque
  async show(req, res) {
    try {
      const stock = await Stock.findByPk(req.params.id);

      return res.json(stock);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Salva um item no Estoque
  async store(req, res) {
    try {
      const stock = await Stock.create(req.body);

      return res.json(stock);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Atualiza um item de Estoque
  async update(req, res) {
    try {
      const stock = await Stock.findByPk(req.params.id);

      await stock.update(req.body);

      return res.json({ stock });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  //Deleta um item do Estoque
  async destroy(req, res) {
    try {
      const stock = await Stock.findByPk(req.params.id);

      await stock.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new StockController();