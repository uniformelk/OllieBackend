import  express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import movieRoutes from "./Routes/movieRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
dotenv.config();
conectarDB();

const dominiosPermitidos = ['http://localhost:5173', 'http://localhost'];

const corsOptions = {
    origin: function (origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1){
            callback(null, true);
        }else{
            callback(new Error('No es un dominio permitido por CORS'));
        }
    }
}

app.use(cors(corsOptions));
//Routes
app.use('/api/movies', movieRoutes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});