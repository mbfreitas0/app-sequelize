const db = require("../models/");
const product = require("../models/product");
const Stock = db.stocks;
const Op = db.Sequelize.Op;

class StockController {
  
    // Retorna todos os itens do Estoque
    async index(req, res) {
    try {
      const stocks = await Stock.findAll({include: [{ model: Product, as: 'produtos' }]});

      return res.json(stocks);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

// Retorna um item de Estoque
  async show(req, res) {
    try {
      const stocks = await Stock.findByPk(req.params.id);

      return res.json(stocks);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Salva um item no Estoque
  async store(req, res) {
    try {
      const stocks = await Stock.create(req.body);

      return res.json(stocks);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Atualiza um item de Estoque
  async update(req, res) {
    try {
      const stocks = await Stock.findByPk(req.params.id);

      await stocks.update(req.body);

      return res.json({ stocks });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  //Deleta um item do Estoque
  async destroy(req, res) {
    try {
      const stocks = await Stock.findByPk(req.params.id);

      await stocks.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new StockController();