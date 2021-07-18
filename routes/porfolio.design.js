const { Router, status } = require("express")
const router = Router()
const potrafolios =require("../database/portafolios.json")
const pDesign = require("../database/portafolioDesign.json");
const pool = require("../database/database");
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
router.get('/api/Design/branding', async (req, res) => {
let proyecto = await pool.query('SELECT * FROM portafolios ')

  res.json(proyecto)

   });

   router.get('/api/Design/portafolio/fotogravi/contenido', async (req, res) => {
    let contenido = await pool.query('SELECT * FROM contenido where id = 3 ')
   let colores = await pool.query('SELECT * FROM `colores` WHERE `id` = 1')
    
   res.json({"data":[contenido, colores]})
    
  });
    
  router.get('/api/Design/portafolio/soldare/contenido', async (req, res) => {
    let contenido = await pool.query('SELECT * FROM contenido where id = 4 ')
    let colores = await pool.query('SELECT * FROM `colores` WHERE `id` = 2')
      res.json({"data":[contenido, colores]})
    
  });
  router.get('/api/Design/portafolio/portafolio3/contenido', async (req, res) => {
    let contenido = await pool.query('SELECT * FROM contenido where id = 5 ')
    let colores = await pool.query('SELECT * FROM `colores` WHERE `id` = 3')
      res.json({"data":[contenido, colores]})
    
  });


    
///portafolio/Design/branding/soldare
///portafolio/Design/branding/fotogravi

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

//rutas para web
router.get("/api/Design/Web-design", (req, res) => {
    res.json(pDesign[2]['contenido'][0])
})
router.get('/api/Design/Web-design/catalogo', async (req, res) => {
    res.json(pDesign[2]['contenido'][0]['catalogo'])
    
    })



module.exports = router;