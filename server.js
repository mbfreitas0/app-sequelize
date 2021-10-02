const express = require('express');
const cors = require("cors");
const rotaProdutos = require('./src/routes/product');
const rotaEntradaProdutos = require('./src/routes/entryproduct');
const rotaEstoque = require('./src/routes/stock');
const Product = require('./src/app/models/product');
const EntryProduct = require('./src/app/models/entryproduct');
const Stock = require('./src/app/models/stock');

const app = express();

const db = require("./src/app/models");
db.sequelize.sync();

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
  });
  

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to m4rcelo application." });
});

app.use(express.json());

app.use('/products', rotaProdutos);
app.use('/entryproducts', rotaEntradaProdutos);
app.use('/stocks', rotaEstoque);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});