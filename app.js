const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require ('morgan')

//seting
app.set('port', process.env.PORT || 3001)
app.set('json spaces', 2)


//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'))
app.use(cors());
//routes

app.use(require('./routes/index'));
app.use(require('./routes/porfolio.design'));

//static files


//start server
app.listen(app.get('port'), ()=>
{console.log("server on port ", app.get('port'))
} )