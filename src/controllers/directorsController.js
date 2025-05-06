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

module.exports = {getAllDirectors};