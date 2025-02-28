const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");

// Configuración de la aplicación
app.set('appName', "FotograviAPI");
app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2);

// Configuración de la conexión a la base de datos
const dbOptions = {
    host: "bqf63n1mfnkfl7mhbrcg-mysql.services.clever-cloud.com",
    user: 'uzhk9diir1enw3vy',
    password: "EmuX70bnj7vK2dlfle5D",
    database: "bqf63n1mfnkfl7mhbrcg",
    port: "3306"

};

// Lista blanca de orígenes permitidos
const listaBlanca = ['http://localhost:3000', 'https://fotogravi-design.com'];

// Configuración de CORS
const corsOptions = {
  origin: function (origin, callback) {
    if (listaBlanca.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acceso no permitido por CORS'));
    }
  },
};

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(myConnection(mysql, dbOptions, 'single'));

// Rutas
app.use(require('./routes/index'));
app.use(require('./routes/porfolio.design'));
app.use(require('./routes/TrabajosPortafolio'));
app.use(require('./routes/email'));
// Iniciar el servidor
app.listen(app.get('port'), () => {
  console.log("Server on port", app.get('port'));
});