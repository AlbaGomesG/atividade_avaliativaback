const pool = require("../config/database.js");

const getMovies = async (genero) => {
    if (!genero) {
        const result = await pool.query(`SELECT movies.*, directors.nome AS director_nome
            FROM movies
            LEFT JOIN  directors ON movies.director_id = directors.id`);
            return result.rows;
    } else {
        const result = await pool.query(`SELECT movies.*, directors.nome AS director_nome
            FROM movies
            LEFT JOIN directors ON movies.director_id = directors.id
            WHERE movies.genero ILIKE $1`, [`%${genero}%`]);
            return result.rows;
    }
};

module.exports = { getMovies };