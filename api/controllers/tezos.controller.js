const models = require('../../models');
const {Op} = require("sequelize");
const { default: Axios } = require('axios');

const getLastTezosTransaciton = async (req, res) => {

    await  Axios.get('https://api.tzkt.io/v1/blocks').then(result => {
        res.status(200).send(result.data);
    });
}


const getOneTezosTransaction = async (req, res) => {

    const hash = req.params.id
    await  Axios.get('https://api.tzkt.io/v1/blocks/'+hash).then(result => {
        console.log(result.data)
        res.status(200).send(result.data);
    });
}

module.exports = {getLastTezosTransaciton, getOneTezosTransaction};
