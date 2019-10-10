var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Получить список существующих слоёв");
});

router.get("/configs/:id", function(req, res, next) {
  const layerId = req.params.id;

  res.send("Получить конфигурацию слоя c id = " + layerId);
});

router.put("/configs", function(req, res, next) {
  res.send("Создать конфигурацию нового слоя");
});

router.post("/configs", function(req, res, next) {
  res.send("Обновить конфигурацию существующего слоя");
});

module.exports = router;
