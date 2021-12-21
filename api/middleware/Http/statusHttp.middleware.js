const statusCode = function () {
    return async (req, res, next) => {

        if (res.statusCode == 200) {
            req.status = true;
            console.log(res.statusCode)
            next()
        } else {
            req.status = false
            console.log(res.statusCode)
            next()
        }
    };
}

module.exports = {statusCode};
