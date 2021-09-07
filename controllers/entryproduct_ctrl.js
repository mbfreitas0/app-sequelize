const {
    entryproduct,
    product,
    Sequelize
   } = require("../app/models");const Op = Sequelize.Op;let self = {};self.getAll = async (req,res) => {
    try{
     let data = await item.findAll({
      attributes:["id", "id_produto", "qtde","valor_unitario", "data_entrada"],
      include:[
       {
        model:product,
        as:'produtos',
        attributes:["id","descricao"]
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
     let data = await item.findOne({
      attributes:["id", "id_produto", "qtde","valor_unitario", "data_entrada"],
      include:[
       {
        model:product,
        as:'produtos',
        attributes:["id","descricao"]
       }
      ],
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
     let data = await item.findAll({
      attributes:["id", "id_produto", "qtde","valor_unitario", "data_entrada"],
      include:[
       {
        model:product,
        as:'produtos',
        attributes:["id","descricao"]
       }
      ],
      where:{
       [Op.or]:{
        descricao:{
         [Op.like]:"%"+text+"%"
        },
        //search by descricao of products
        '$product.descricao$':{
         [Op.like]:"%"+text+"%"
        }
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
     let data = await item.create(body);
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
     let data = await entryproduct.update(body,{
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
     let data = await entryproduct.destroy({
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