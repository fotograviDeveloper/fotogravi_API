const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require ('morgan')
const { database } = require("./database/keys.js");
const mysql = require ("mysql")
const myConnection = require("express-myconnection");


//seting 
app.set('appName', "FotograviAPI");
app.set('port', process.env.PORT || 3001)
app.set('json spaces', 2)


//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'))
app.use(cors());
app.use(express.json(myConnection));

//routes

app.use(require('./routes/index'));
app.use(require('./routes/porfolio.design'));
app.use(require('./routes/TrabajosPortafolio'));
//static files


//start server
app.listen(app.get('port'), ()=>
{console.log("server on port ", app.get('port'))
} )