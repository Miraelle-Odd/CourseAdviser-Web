var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hhmsystemda1@gmail.com',
        pass: 'mdutsjbrosobrwqb'
    }
});

const sendAppointment = async(req, res) => {
    var mailOptions = {
        from: 'hhmsystemda1@gmail.com',
        to: req.body.reveiverEmail,
        subject: 'Your appointment with XXX Center have been made',
        text: "Hello, " + req.body.reveiverName + ". It's our pleasure to be working with you. Remember to come to XXX Center (" +
            req.body.address + ") on " +
            req.body.time + " for your " +
            req.body.purpose + "."
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send(error)
        } else {
            res.send('Please check your email for confirmation');
        }
    });
}

const sendAccountValidation = async(req, res) => {}

const sendForgetPassword = async(req, res) => {}

module.exports = {
    sendAppointment
}