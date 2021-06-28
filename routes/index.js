const { Router } = require("express")
const router = Router()
const path = require("path");
const pool = require("../database/database");



router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + './../public/index.html'));
  //res.send("holis")  
  //__dirname : It will resolve to your project folder.
});
router.get('/add-portafolio', function (req, res) {

  res.sendFile(path.join(__dirname + './../public/addForm.html'))
 
});
router.post('/add-portafolio', async(req, res) =>{

const {titulo, link, imgLink, descripcion, alt} =req.body
let newImg = {
 titulo,
  link,
  imgLink,
  descripcion,
  alt
};
await pool.query('INSERT INTO portafolios SET ? ', newImg);
 

console.log(newImg);
res.send("recivido prro todo oki")

}) 
router.post('/Contacto/send', function (req, res) {
  res.json(req.body) 
  console.log(req.body) 
});





module.exports = router;