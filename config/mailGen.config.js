const MailGenConfig = require('mailgen');
const mailGenerator = new MailGenConfig({
    theme: 'salted',
    product: {
        logoHeight: '50px',
        name: 'Nupay',
        link: 'https://nupay.com',
        logo: 'https://res.cloudinary.com/nwccompany/image/upload/v1607597851/Webp.net-resizeimage_12_y6jbnp.png',
        // logo: your app logo url
    },
})

const email= (nameEmail,linkVerification) => {
    const body = {body: {
            name: nameEmail,
            intro: 'Account Create with success',
            action: {
                instructions: 'Please click the button below to verify account',
                button: {
                    color: '#33b5e5',
                    text: 'Verify',
                    link: linkVerification,
                },
            },
        }
    }
    return body
}


const passwordreset= (nameEmail,linkVerification) => {
    const body = {body: {
            name: nameEmail,
            intro: 'hey there , Someone requested a new password for your Bidding Car account.',
            action: {
                instructions: 'Please click the button below to change your password',
                button: {
                    color: '#33b5e5',
                    text: 'Reset Password',
                    link: linkVerification,
                },
            },
        }
    }
    return body
}



const requestwithdrawls= (nameEmail,amount) => {
    const body = {body: {
            name: nameEmail,
            intro: `You've requested to withdraw ${amount} to your account`,
            // action: {
            //   instructions: 'Please click the button below to change your password',
            //   button: {
            //     color: '#33b5e5',
            //     text: 'Reset Password',
            //     link: linkVerification,
            //   },
            // },
        }
    }
    return body
}
module.exports = {mailGenerator,email,passwordreset,requestwithdrawls};
