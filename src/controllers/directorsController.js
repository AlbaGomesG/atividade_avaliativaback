const pool = require("../config/database.js");
const directorsModel = require("../models/directorsModel.js");

const getAllDirectors = async (req, res) => {
    try {
        const directors = await directorsModel.getDirectors();
        res.json(directors);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar diretores" });
    }
};

const getDirector = async (req, res) => {
    try {
        const director = await directorsModel.getDirectorById(req.params.id);
        if (!director) {
            return res.status(404).json({ message: "Diretor não foi encontrado!"});
        }
        res.json(director);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Diretor!"});
    }
};

module.exports = {getAllDirectors, getDirector};