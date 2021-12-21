var express = require('express');
var etheruim = express.Router();
var etheruimController = require('../controllers/etheruim.controller');

etheruim.get('', etheruimController.getBidBelong);

module.exports = etheruim;
