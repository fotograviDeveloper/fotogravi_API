//este archivo contiene las rutas necesaruas para el apartado de trabajos de mi portafolio 


const { Router } = require("express");
const router = Router();
const pool = require("../database/database");

router.get("/portafolios/trabajos", async function(req, res){
    res.send("holis")
})

module.exports = router;