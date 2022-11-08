import express from 'express'
import "dotenv/config";
import { base } from './src/db/conexion.js';
import { router } from './src/router/autorRutas.js'
import { routerLibro } from './src/router/libroRutas.js'
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import path from 'path';


const app = express();
const port = process.env.PORT || 8080;
//Iniciar la Base de Datos
base();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


//Conexion rutas
app.use("/api", router);
app.use("/api", routerLibro)

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
})


