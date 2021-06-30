//const {sendEmailOK}= require("./../controler/sendControler")
const { Router } = require("express");
const nodemailer = require("nodemailer");
const {dataAuth} = require("../controler/key.Email")
const router = Router()
//const path = require("path");
//const pool = require("../database/database");


//ruta por donde resivo los datos
router.post('/Contacto/send', async function (req, res) {
   const {nombre, apellido, correo, telefono, asunto, mensaje} = req.body

   const transporter =  nodemailer.createTransport({
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
const info = await transporter.sendMail({
  from: `"fotogravi.com" ${correo}`,
  to: "rauldejesusguadalupe@gmail.com",
  subject: `${asunto}`,
  html: `
  <div class="contaier">
  <h1>contatado por </h1>
  <ul>
      <li>cliente : ${nombre + apellido}
      </li>
      <li>
          telefono :${telefono}
   </li>
 
  </ul>
  <p>${mensaje}</p>
</div>` ,

})


console.log("mensaje send ", info)
  });
  
  

  
module.exports = router;