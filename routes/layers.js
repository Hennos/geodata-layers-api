var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("Получить список существующих слоёв");
});

router.get("/configs", function(req, res, next) {
  res.render("Получить конфигурацию слоя по его идентификатору");
});

router.put("/configs", function(req, res, next) {
  res.render("Создать конфигурацию нового слоя");
});

router.post("/configs", function(req, res, next) {
  res.render("Обновить конфигурацию существующего слоя");
});

module.exports = router;
