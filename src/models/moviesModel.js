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

const getMovieById  = async (id) => {
    const result = await pool.query(`SELECT  movies.*, directors.nome AS director_nome
        FROM movies
        LEFT JOIN directors ON movies.director_id = directors.id
        WHERE movies.id = $1`, [id]);
        return result.rows[0];
};

const createMovie = async (titulo, genero, anoLancamento, avaliacao, director_id) => {
    const result = await pool.query("INSERT INTO movies (titulo, genero, anoLancamento, avaliacao, director_id) VALUES ($1, $2, $3, $4, $5) RETURNING *", [titulo, genero, anoLancamento, avaliacao, director_id]);
    return result.rows[0];
};

module.exports = { getMovies, getMovieById, createMovie };