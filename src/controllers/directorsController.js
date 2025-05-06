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

const createDirector = async (req, res) => {
    try {
        const { nome } = req.body;
        const newDirector = await directorsModel.createDirector(nome);
        res.status(201).json(newDirector);
    } catch (error) {
        if (error.code === "23505") {
            return res.status(400).json({ message: "Esse diretor já existe!" });
        }
        res.status(500).json({ message: "Erro ao criar diretor!"});
    }
};

const updateDirector = async (req, res) => {
    try {
        const { nome } = req.body;
        const updateDirector = await directorsModel.updateDirector(req.params.id, nome);
        if (!updateDirector) {
            return res.status(404).json({ message: "Diretor não foi encontrado!"});
        }
        res.status(200).json({ message: "Diretor atualizado com sucesso!", updateDirector });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar diretor!"});
    }
};

const deleteDirector = async (req, res) => {
    try {
        const message = await directorsModel.deleteDirector(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar diretor!"});
    }
};

module.exports = {getAllDirectors, getDirector, createDirector, updateDirector ,deleteDirector};