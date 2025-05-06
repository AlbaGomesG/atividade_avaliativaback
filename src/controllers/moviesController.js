const moviesModel = require("../models/moviesModel.js");

const getAllMovies = async (req, res) => {
    try {
        const { genero } = req.query;
        const movies = await moviesModel.getMovies(genero);
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar os filmes" });
    }
};

module.exports = {getAllMovies};