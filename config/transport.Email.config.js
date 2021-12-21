const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 587,

    auth: {
        user: "douanlacompanie@gmail.com",
        pass: "decdec2020"
    }
    // host: "smtp.mailtrap.io",
    // port: 2525,
    // auth: {
    //   user: "d02c61ef557f23",
    //   pass: "ce4f1a0422b401"
    // }
});


module.exports = transport
