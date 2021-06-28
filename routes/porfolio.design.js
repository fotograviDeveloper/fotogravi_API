const { Router, response } = require("express")
const router = Router()
const potrafolios =require("../database/portafolios.json")
const pDesign = require("../database/portafolioDesign.json");

//sconst cors = require("cors")


//var ListaBlanca = ("http://localhost:3000" || "http://localhost:3001")
/*var corsOptions = {
    origin: function(origin, callback){
     
            if(ListaBlanca.indexOf(origin) !== -1){
                callback(null, true);
            }else{
                callback(new Error('not alloned by cors'))
            }
        }
    }

*/
//rutas portafolios branding
router.get('/api/Design/Branding', async (req, res) => {
    res.json(potrafolios)
   });






//rutas de otros portafolios
router.get('/api/Design', async (req, res) => {

 res.json(pDesign)
    


});
//rutas para ilustracion
router.get("/api/Design/ilustration", async (req, res) => {
    res.json(pDesign[1]['contenido'][0])
})
router.get("/api/Design/ilustration/catalogo", (req, res) => {
    res.json(pDesign[1]['contenido'][0]['catalogo'])
})

//rutas para matte painting
router.get("/api/Design/mattepainting", (req, res) => {
    res.json(pDesign[0]['contenido'][0])
})
//ruta secundaria que mustra las imagenes de este portafolio
router.get('/api/Design/mattepainting/catalogo', async (req, res) => {
    res.json(pDesign[0]['contenido'][0]['catalogo'])
    
    })




module.exports = router;