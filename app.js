var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes");
var layersRouter = require("./routes/layers");

var app = express();

var db = require("./db")();
app.use(function(req, res, next) {
  req.db = db;
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/layers", layersRouter);

module.exports = app;
