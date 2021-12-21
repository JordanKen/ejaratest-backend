const jwt = require("jsonwebtoken");
const models = require("../../../models");

const auth = function () {
    return async (req, res, next) => {
        let token;
        if (req.header("Authorization")) {
            token = req.header("Authorization").replace("Bearer ", "");
            console.log(token);
        } else {
            res.status(200).send({status: false, error: "Not authorized to access this resource verified header"});
        }
        try {
            let permission = "Not Permission"
            console.log(token);
            const data = jwt.verify(token, process.env.JWT_KEY);
            const user = await models.user.findOne({
                where: {id: data.user}
            });

            if (!user) {

                throw new Error();
            }
            req.user = {user};
            if(user.isAdmin == 1){
                req.isAdmin = true;
            }else {
                req.isAdmin = false;
            }
            req.token = token;

            next();
        } catch (error) {
            res.status(200).send({status: false, error: "Not authorized to access this resource"});
        }
    };
};


module.exports = {auth};
