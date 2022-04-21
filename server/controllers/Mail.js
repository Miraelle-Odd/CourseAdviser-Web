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
        to: req.body.receiverEmail,
        subject: 'Your appointment with XXX Center have been made',
        text: "Hello, " + req.body.receiverName + ". It's our pleasure to be working with you. Remember to come to XXX Center (" +
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

const sendAccountValidation = async(req, res) => {
    var mailOptions = {
        from: 'hhmsystemda1@gmail.com',
        to: req.body.receiverEmail,
        subject: 'Email verification request from XXX Center Course Adviser',
        html: `
            <div>Hello ` + req.body.name + `,</div> 
            <div>To support your employment to our XXX Center, we would gladly grant you an account in Course Adviser system.</div>
            <div>The password for your account is : ` + req.body.password + `</div>
            <div>To verify your email and complete your XXX Center Course Adviser account, click the link below. </div>
            <a href = "http://localhost:3000/account-activation/` + req.body.token + `">Activate Account</a>`,
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send(error)
        } else {
            res.send("Please check your email for recovery direction");
        }
    });
}

const sendForgetPassword = async(req, res) => {
    var mailOptions = {
        from: 'hhmsystemda1@gmail.com',
        to: req.body.receiverEmail,
        subject: 'Password Recovery for XXX Center account',
        html: `
            <div>Hello ` + req.body.receiverName + `, Your Course Adviser password can be reset by clicking the button below. If you did not request a new password, please ignore this email. </div>
            <a href = "http://localhost:3000/password-recovery/` + req.body.token + `">Reset Password</a>`,
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send(error)
        } else {
            res.send("Please check your email for recovery direction");
        }
    });
}

module.exports = {
    sendAppointment,
    sendForgetPassword
}