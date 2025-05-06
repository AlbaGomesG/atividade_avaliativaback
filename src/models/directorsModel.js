const pool = require("../config/database.js");

const getDirectors = async (req, res) => {
    const result = await pool.query("SELECT * FROM  directors");
    return result.rows;
};

const getDirectorById = async (id) => {
    const result = await pool.query("SELECT * FROM directors WHERE id = $1", [id]);
    return result.rows[0];
};

const createDirector = async (nome) => {
    const result = await pool.query("INSERT INTO directors (nome) VALUES ($1) RETURNING *", [nome]);
    return result.rows[0];
};

const updateDirector = async (id, nome) => {
    const result = await pool.query("UPDATE directors SET nome = $1 WHERE id = $2 RETURNING *", [nome, id]);
    return result.rows[0];
};

const deleteDirector = async (id) => {
    const result = await pool.query("DELETE FROM directors WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return {error: "Diretor não encontrado!"};
    }
    return { message: "Diretor deletado com sucesso!" };
};

module.exports = {getDirectors, getDirectorById, createDirector, updateDirector, deleteDirector};