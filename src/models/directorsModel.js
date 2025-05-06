const pool = require("../config/database.js");

const getDirectors = async (req, res) => {
    const result = await pool.query("SELECT * FROM  directors");
    return result.rows;
};

const getDirectorById = async (id) => {
    const result = await pool.query("SELECT * FROM directors WHERE id = $1", [id]);
    return result.rows[0];
};

module.exports = {getDirectors, getDirectorById};