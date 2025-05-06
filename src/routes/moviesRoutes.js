const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController.js");
const upload = require("../config/upload.js");

router.get("/movies", moviesController.getAllMovies);
router.get("/movies/:id", moviesController.getMovie);
router.post("/movies", upload.single("photo"), moviesController.createMovie);
router.put("/movies/:id", moviesController.updateMovie);
router.delete("/movies/:id", moviesController.deleteMovie);

module.exports = router;