const express = require("express");
const cors = require("cors");
const rotaProdutos = require('./routes/product');
const rotaEntradaProdutos = require('./routes/entryproduct');

const app = express();

const db = require("./app/models");
db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
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

//app.use('/products', rotaProdutos);
//app.use('/entryproducts', rotaEntradaProdutos);
require("./routes/product")(app);
require("./routes/entryproduct")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
