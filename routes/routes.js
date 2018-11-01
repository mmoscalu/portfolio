const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer');
const {gmail_user, gmail_pass} = require('../config');

router.get('/', (req, res) => {

    res.render('home/index');

});

router.post('/send-message', (req, res) => {

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: gmail_user,
            pass: gmail_pass
        }
    });
    let mailOptions = {
        from: req.body.name + '&lt;' + req.body.email + '&lt;',
        to: gmail_user,
        subject: req.body.subject,
        text: `Ім'я: ${req.body.name} \n E-mail: ${req.body.email} \n Телефон: ${req.body.phone} \n Повідомлення: ${req.body.message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {

        if (error) {

            return console.log(error);

        } else {

            res.render('home/index');
        }

    });

});

module.exports = router;