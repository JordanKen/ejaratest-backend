var express = require('express');
var bitcoin = express.Router();
var bitcoinController = require('../controllers/bitcoin.controller');
const auth = require("../middleware/Auth/auth.middleware");

bitcoin.get('/',bitcoinController.getLastBTCTransaciton);
bitcoin.get('/:id',bitcoinController.getOneBTCTransaction);

module.exports = bitcoin;
