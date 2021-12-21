const models = require('../../models');
const {Op} = require("sequelize");

const getAllSale = async (req, res) => {

    var sales = await models.sale.findAll({
        include:[models.vehicule]
    });
    res.status(200).send({status: true, response: sales});
}

const getOneSale = async (req, res) => {

    var sales = await models.sale.findOne({
        include:[models.vehicule], where: {id: req.params.id}
    });
    res.status(200).send({status: true, response: sales});
}

const SaveSale = async (req, res, next) => {
    try {
        console.log(req.body);
        var sale = {
            name: req.body.name,
            date: req.body.date,
            startHour: req.body.startHour,
            endHour: req.body.endHour,
            vehiculeId: req.body.vehiculeId,
            initPrice: req.body.initPrice,
            finalPrice: req.body.initPrice
        }

        console.log(sale)

            await models.sale.create(sale)
                .then(sale => {
                    res.status(200).json({status: true, reponse: {message: "sale successful create!", data: sale}})
                })
    } catch (error) {
        res.status(400).json({status: false, error: error})
    }
};

/*const getAllGarageVehicule = async (req, res, next) => {
    try {
        const VehiculesUsers = await models.vehicule.findAll({
            where: {id_user: req.params.user_id}, include: [models.vente, models.user]
        });


        res.status(200).send({
            status: true,
            response: VehiculesUsers
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({status: false, error: error})
    }
};*/

module.exports = {SaveSale, getAllSale, getOneSale};
