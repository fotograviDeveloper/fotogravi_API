//este archivo contiene las rutas necesaruas para el apartado de trabajos de mi portafolio 


const { Router } = require("express");
const router = Router();


router.get("/portafolios/trabajos", function(req, res){
    res.send("holis")
})

module.exports = router;