const models = require('../../models');
const {Op} = require("sequelize");
const { default: Axios } = require('axios');


const getLastBTCTransaciton = async (req, res) => {

    await  Axios.get('https://blockchain.info/latestblock').then(result => {
         Axios.get('https://blockchain.info/rawblock/'+ result.data.hash).then(
            result => {
                console.log(result.data)
                res.status(200).send(result.data);
            }
        )
    });
}


const getOneBTCTransaction = async (req, res) => {

    const hash = req.params.id
    console.log(hash)
    const url = 'https://blockchain.info/rawtx/'+ hash
    await  Axios.get(url).then(result => {
        res.status(200).send(result.data);
    });
}

module.exports = {getLastBTCTransaciton, getOneBTCTransaction};
