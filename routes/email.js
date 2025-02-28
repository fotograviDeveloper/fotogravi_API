//const {sendEmailOK}= require("./../controler/sendControler")
const { Router } = require("express");
const nodemailer = require("nodemailer");
const {dataAuth} = require("../controler/key.Email")
const router = Router()
//const path = require("path");
const pool = require("../database/database");


//ruta por donde resivo los datos
router.post('/Contacto/send', async function (req, res) {
   const {nombre, apellido, correo, telefono, asunto, mensaje} = req.body
   var date= new Date(); //Obtiene la fecha
   //Lo parseas para transformarlo
   
   
   const emailDt = {nombre, apellido, correo, telefono, asunto, mensaje, date}
//envio de email
   let transporter =  nodemailer.createTransport({
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
  from: `"localhost3000" ${emailDt.correo}`, // aqui se cambia el domino
  to: "rauldejesusguadalupe@gmail.com",
  subject: `${asunto}`,
  html: `
  <div class="contaier">
  <h1>contactado por: </h1>
  <ul>
      <li>cliente : ${nombre + apellido}
      </li>
      <li>
          telefono :${telefono}
   </li>
   <li>correo : ${emailDt.correo}
   </li>
  </ul>
  <p>${mensaje}</p>
</div>` ,

})

//guardar email en DB

await pool.query('INSERT INTO emails Set ? ', emailDt);
 


res.send("recivido prro todo oki")



console.log("mensaje send ", info)
  });
  
router.get('/app/API/new-emails/resividos', async function (req, res ) {
 

 let dia = new Date().getDate(); 
 let mes = new Date().getMonth(); 
 let año = new Date().getFullYear();
 
 let date= new Date
console.log(date)
let diaPrueba="2021-05-22"
let consulta =  await pool.query("SELECT * FROM emails ");

res.json(consulta);
})

  
module.exports = router;