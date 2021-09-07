const entryproduct_ctrl = require('../controllers/entryproduct_ctrl');

module.exports = function(express) {
    const route = express.Router();

 //entryproduct route
 route.get("/",entryproduct_ctrl.getAll);
 route.get("/:id",entryproduct_ctrl.get);
 route.get("/entryproduct_search",entryproduct_ctrl.search);
 route.post("/",entryproduct_ctrl.save);
 route.put("/:id",entryproduct_ctrl.update);
 route.delete("/:id",entryproduct_ctrl.delete);
 return route;

};
module.exports = self;