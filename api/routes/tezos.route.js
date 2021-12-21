var express = require('express');
var tezos = express.Router();
var tezosController = require('../controllers/tezos.controller');
const auth = require("../middleware/Auth/auth.middleware");

tezos.get('/',tezosController.getLastTezosTransaciton);
tezos.get('/:id',tezosController.getOneTezosTransaction);

module.exports = tezos;
