const product_ctrl = require('../controllers/product_ctrl');

module.exports = function(express) {
    const route = express.Router();

    //product route
    route.get("/",product_ctrl.getAll);
    route.get("/:id",product_ctrl.get);
    route.get("/product_search",product_ctrl.search);
    route.post("/",product_ctrl.save);
    route.put("/:id",product_ctrl.update);
    route.delete("/:id",product_ctrl.delete);
    route.get("/product_with_items",product_ctrl.getWithItems);
    return route;

};
module.exports = self;