const multer = require('multer')
const path = require('path')

const uploads = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.join(__dirname+"/public"))
        },
        filename(req, file, callback) {
            callback(null, Date.now() + '-' + file.originalname)
        }
    }),
    fileFilter(req, file, callback) {
        if (file.mimetype.split('/')[0] === 'image' && file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
            return callback(null, true);
        }
        else if (file.mimetype.split('/')[0] === 'video' && file.originalname.match(/\.(mp4|MP4)$/)) {
            return callback(null, true);
        }
        req.fileValidationError = 'Only image files are allowed!';
        callback(null, true);
    }
})

exports.uploads = uploads

