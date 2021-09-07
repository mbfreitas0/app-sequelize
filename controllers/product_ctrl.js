const {
    product,
    entryproduct,
    Sequelize
   } = require("../app/models");const Op = Sequelize.Op;let self = {};self.getAll = async (req,res) => {
    try{
     let data = await product.findAll({
      attributes:["id","status", "descricao", "estoque_min", "estoque_max"],
     });
     return res.json({
      status:"ok",
      data:data
     })
    }catch(error){
     res.status(500).json({
      status:"error",
      data:error
     })
    }
   }
   self.getWithentryproducts = async (req,res) => {
    try{
     let data = await product.findAll({
      attributes:["id","status", "descricao", "estoque_min", "estoque_max"],
      include:[
       {
        model:entryproduct,
        as:'entrada_produtos',
        attributes:["id", "id_produto", "qtde", "valor_unitario","data_entrada"]
       }
      ]
     });
     return res.json({
      status:"ok",
      data:data
     })
    }catch(error){
     res.status(500).json({
      status:"error",
      data:error
     })
    }
   }
   self.get = async (req,res) => {
    try{
     let id = req.params.id;
     let data = await product.findOne({
      attributes:["id","status", "descricao", "estoque_min", "estoque_max"],
      where:{
       id:id
      }
     });
     return res.json({
      status:"ok",
      data:data
     })
    }catch(error){
     res.status(500).json({
      status:"error",
      data:error
     })
    }
   }
   self.search = async (req,res) => {
    try{
     let text = req.query.text;
     let data = await product.findAll({
      attributes:["id","status", "descricao", "estoque_min", "estoque_max"],
      where:{
       descricao:{
        [Op.like]:"%"+text+"%"
       }
      }
     });
     return res.json({
      status:"ok",
      data:data
     })
    }catch(error){
     res.status(500).json({
      status:"error",
      data:error
     })
    }
   }
   self.save = async (req,res) => {
    try{
     let body = req.body;
     let data = await product.create(body);
     return res.json({
      status:"ok",
      data:data
     })
    }catch(error){
     res.status(500).json({
      status:"error",
      data:error
     })
    }
   }
   self.update = async (req,res) => {
    try{
     let id = req.params.id;
     let body = req.body;
     let data = await product.update(body,{
      where:{
       id:id
      }
     });
     return res.json({
      status:"ok",
      data:data
     })
    }catch(error){
     res.status(500).json({
      status:"error",
      data:error
     })
    }
   }
   self.delete = async (req,res) => {
    try{
     let id = req.params.id;
     let data = await product.destroy({
      where:{
       id:id
      }
     });
     return res.json({
      status:"ok",
      data:data
     })
    }catch(error){
     res.status(500).json({
      status:"error",
      data:error
     })
    }
   }
   module.exports = self;