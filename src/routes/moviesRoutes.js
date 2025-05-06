const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController.js");

router.get("/movies", moviesController.getAllMovies);
router.get("/movies/:id", moviesController.getMovie);
router.post("/movies", moviesController.createMovie);
router.put("/movies/:id", moviesController.updateMovie);

module.exports = router;