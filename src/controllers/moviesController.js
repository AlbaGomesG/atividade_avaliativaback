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

const getMovie = async (req, res) => {
    try {
        const movie = await moviesModel.getMovieById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Filme não encontrado!"});
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar o filme!"});
    }
};

const createMovie = async (req, res) => {
    try {
        const { titulo, genero, anoLancamento, avaliacao, director_id } = req.body;
        const newMovie = await moviesModel.createMovie(titulo, genero, anoLancamento, avaliacao, director_id);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar o filme, tente novamente!" });
    }
};

const updateMovie = async (req, res) => {
    try {
        const { titulo, genero} = req.body;
        const updateMovie = await moviesModel.updateMovie(req.params.id, titulo, genero);
        if (!updateMovie) {
            return res.status(404).json({ message: "Filme não encontrado!"});
        }
        res.status(200).json({ message: "Filme atualizado com sucesso!", updateMovie });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar o filme!"});
    }
};

const deleteMovie = async (req, res) => {
    try {
        const movie = await moviesModel.deleteMovie(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Filme não foi encontrado!"});
        }
        return res.status(200).json({ message: "Filme deletado com sucesso!", movie });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar o filme!"});
    }
};

module.exports = {getAllMovies, getMovie, createMovie, updateMovie, deleteMovie};