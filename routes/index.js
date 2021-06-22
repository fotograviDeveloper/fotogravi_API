const { Router } = require("express")
const router = Router()
const path =require("path");

router.get('/index',function(req,res){
    res.sendFile(path.join(__dirname+'./../public/index.html'));
    //res.send("holis")  
    //__dirname : It will resolve to your project folder.
      });

router.get('/asdas', (req, res) =>{

    res.sendFile(path.join(__dirname+'../public/index.html'));
    
})

module.exports = router;