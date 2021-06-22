const { Router } = require("express")
const router = Router()
const pDesign = require ("../database/portafolioDesign.json");
const ilustracion = require ("../database/ilustracion.json");
const painting = require ("../database/painting.json");
const paintingImagenes = require ("../database/painting.Img.json");
const ilustracionIMGS = require("../database/Ilustracion.Img.json")


router.get('/api/Design', (req, res) =>{

res.json( pDesign)
    
})
router.get("/api/Design/ilustration", (req, res) =>{
    res.json(ilustracion)
})
router.get("/api/Design/ilustration/imagenes", (req, res) =>{
    res.json(ilustracionIMGS.Imagenes)
})

  
router.get("/api/Design/mattepainting", (req, res) =>{
res.json(painting)
})
router.get("/api/Design/mattepainting/imagenes", (req, res) =>{
    res.json(paintingImagenes.Imagenes)
    })

    router.get("/api/Design/web-design", (req, res) =>{
        res.send("ERROR 404 ARCHIVO NO ENCONTRADO")
        res.send("holis")  
        })
    
module.exports = router;