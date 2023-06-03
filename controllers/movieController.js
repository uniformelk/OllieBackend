import Movie from "../models/Movie.js"
import {finMovieName, finMovieID} from "../helpers/consultaApiMovies.js"

const addMovie = async (req, res) =>{
    const nombre = req.body;

    //Prevent User Duplicate
    const existeMovie = await Movie.findOne({nombre});
    if(existeMovie){
        const error = new Error('Pelicula ya registrada');
        return res.status(400).json({msg: error.message});
    }
    //Create Movie
    try {
        const movie = new Movie(req.body);
        const movieSave = await movie.save();
        res.json(movieSave);
    } catch (error) {
        console.log(error)
    }
}

const findMovies = async (req, res) =>{
    try {
        const movies = await Movie.find();
        res.json(movies)
    } catch (error) {
        console.log(error)
    }
}

const findInfoMovies = async (req, res) => {
    const {name, id} = req.params;
    if(name) {
        const {results} = await finMovieName(name);
        res.send({results});
    };
    if(id) {
        const result = await finMovieID(id);
        res.send(result);
    };
    
}

export {addMovie, findMovies, findInfoMovies}