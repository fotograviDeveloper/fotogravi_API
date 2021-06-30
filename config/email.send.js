const nodemailer = require("nodemailer");
const {dataAuth} = require("../controler/key.Email")

  // create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465, 
        secure: true, // true for 465, false for other ports
        auth: {
        user: dataAuth.username, // generated ethereal user
        pass: dataAuth.password, // generated ethereal password
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    transporter.verify().then(()=>{
    console.log('ready dor send emai     ' +  dataAuth.username);
    })


module.exports = transporter;