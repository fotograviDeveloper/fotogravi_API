//componente no usado aun revisar "../routes/email.js"

const { transporter } = require("./../config/email.send")
const nodemailer = require("nodemailer");
const { Request, Response } = require("express");
const { dataAuth } = require("./key.Email");

class sendControler {

    static sendEmailOK = async (req, res) => {

        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
            return(info)
    }
    //TODO: send email


}
module.exports = sendControler