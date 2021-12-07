var express = require("express");
var router = express.Router();

var Estoque = require("../models/estoque");

router.post("/", function (req, res, next) {
  var estoque = new Estoque({
    produtonome: req.body.produtonome,
    categoria: req.body.categoria,
    quantidade: req.body.quantidade
  });
  estoque.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        myErroTitle: "Um erro aconteceu",
        myError: err
      });
    }
    res.status(201).json({
      myEstqSuccess: "Mensagem salva com sucesso",
      objEstoqueSave: result
    });
  });
});

router.get("/", (req, res, next) => {
  Estoque.find()
    .exec((err, result) => {
      if(err){
        return res.status(500).json({
          Title: 'Aconteceu um erro na hora de achar o produto',
          error: err
        });
      }
      res.status(201).json({
        Title: 'Produto recuperado com sucesso',
        objEstoqueSave: result
      });
    });
});

router.delete("/:id", (req,res,next) => {
  Estoque.findByIdAndDelete(req.params.id, (err, result) => {
    if (err){
      return res.status(500).json({
        Title: 'Um erro aconteceu na hora de deletar o produto do estoque',
        error: err
      });
    }
    res.status(201).json({
      message: 'Produto deletado',
      obj: result
    })
  })
})

module.exports = router;