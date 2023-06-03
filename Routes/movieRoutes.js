import express from "express";
import { addMovie, findMovies, findInfoMovies } from "../controllers/movieController.js";

const router = express.Router();

router.post('/addMovie', addMovie);
router.get('/findMovies', findMovies);
router.get('/findInfomovies/:name', findInfoMovies);
router.get('/findInfomovie/:id', findInfoMovies);


export default router;