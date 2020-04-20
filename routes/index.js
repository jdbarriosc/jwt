var express = require('express');
var router = express.Router();
var mongo = require('../mongo');

var HandlerGenerator = require("../handlegenerator.js");
var middleware = require("../middleware.js");



(async function runServer() {
  try {
      await mongo.connectDB();
  } catch (err) {
      console.error(err);
  }
}());

HandlerGenerator = new HandlerGenerator();

/* GET home page. */
router.get('/', middleware.checkToken, HandlerGenerator.index);

router.post( '/login', HandlerGenerator.login);

module.exports = router;