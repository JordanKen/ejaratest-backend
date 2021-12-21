const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
var fs = require('fs');

let storage = multer.diskStorage({
    destination: async (req, file, cb) => {

        if (!fs.existsSync(`./assets/uploads/${req.originalUrl.split('/')[4]}`)) {
            fs.mkdirSync(`./assets/uploads/${req.originalUrl.split('/')[4]}`);
        }
        cb(null, `./assets/uploads/${req.originalUrl.split('/')[4]}`);
    },
    filename: (req, file, cb) => {
        console.log(req.body)
        if (req.user) {
            cb(null, `${req.originalUrl.split('/')[4]}_${req.user.user.email}.jpg`);

        } else {
            cb(null, `${req.originalUrl.split('/')[4]}_${req.body.email}.jpg`);

        }
    },
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
        console.log("select only image like file eg. jpg , png etc")
    }
};

let uploadFile = multer({
    storage: storage,
    limits: {fileSize: maxSize},
    fileFilter: fileFilter
});

module.exports = uploadFile;
