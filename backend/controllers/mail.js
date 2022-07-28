// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.
const nodemailer = require("nodemailer");


const sendEmail = async(req, res) => {
    const {
        emailHost,
        email,
        subject,
        message,
        name
    } = req.body
    console.log(req.body)

    var transporter = nodemailer.createTransport({
        host: 'mail.zenhosting.tn',
        secure: false,
        auth: {
            user: 'tekafawez@gmail.com',
            pass: ')$ey(0Sso@kK'
        },
        tls: { rejectUnauthorized: false }
    });

    var mailOptions = {
        from: email,
        to: 'tekafawez@gmail.com',
        subject: "email from " + email + "name" + name + " about " + subject,
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.status(200).json('message envoyé')

}
module.exports = {
    sendEmail
}