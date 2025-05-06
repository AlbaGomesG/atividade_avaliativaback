const pool = require("../config/database.js");

const getDirectors = async (req, res) => {
    const result = await pool.query("SELECT * FROM  directors");
    return result.rows;
};

module.exports = {getDirectors};