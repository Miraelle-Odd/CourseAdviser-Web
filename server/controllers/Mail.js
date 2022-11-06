var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hhmsystemda1@gmail.com',
        pass: 'mdutsjbrosobrwqb'
    }
});

const sendAppointment = async(req, res) => {
    var testOptions = ""
    if (req.body.purpose.includes("offline"))
        testOptions = `<div> Click the following link if you want to train with some of our prepared mock tests <div><a href = "http://localhost:3000/main-exam/` + req.body.token + `">Take mock exam</a>`
    if (req.body.purpose.includes("online"))
        testOptions = `<div> Click the following link to take your exam and get evaluation <div><a href = "http://localhost:3000/main-exam/` + req.body.token + `">Take mock exam</a>`
    var mailOptions = {
        from: 'hhmsystemda1@gmail.com',
        to: req.body.receiverEmail,
        subject: 'Your appointment with XXX Center have been made',
        html: `
            <div> Hello, ${req.body.receiverName}. <div>
            <div> It's our pleasure to be working with you. Remember to come to XXX Center (${req.body.address}) on ${req.body.time} for your course consultant.<div>
            ${testOptions}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send(error)
        } else {
            res.send('Please check your email for confirmation');
        }
    });
}

const sendAccountActivation = async(req, res) => {
    var mailOptions = {
        from: 'hhmsystemda1@gmail.com',
        to: req.body.receiverEmail,
        subject: 'Email verification request from XXX Center Course Adviser',
        html: `
                <div>Hello ` + req.body.name + `,</div> 
                <div>To support your employment to our XXX Center, we would gladly grant you an account in Course Adviser system.</div>
                <div>Your username is : ` + req.body.username + `</div>
                <div>The password for your account is : ` + req.body.password + `</div>
                <div>To verify your email and complete your XXX Center Course Adviser account, click the link below. </div>
                <a href = "http://localhost:3000/account-activation/` + req.body.token + `">Activate Account</a>`,
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send(error)
        } else {
            res.send("Please have your staff check their email for account activation");
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
    sendForgetPassword,
    sendAccountActivation
}