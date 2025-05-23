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

const createMovie = async (titulo, genero, anoLancamento, avaliacao, director_id, photo) => {
    const result = await pool.query("INSERT INTO movies (titulo, genero, anoLancamento, avaliacao, director_id, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [titulo, genero, anoLancamento, avaliacao, director_id, photo]);
    return result.rows[0];
};

const updateMovie = async (id, titulo, genero) => {
    const result = await pool.query("UPDATE movies SET titulo = $1, genero = $2 WHERE id = $3 RETURNING *", [titulo, genero, id]);
    return result.rows[0];
};

const deleteMovie = async (id) => {
    const result = await pool.query("DELETE FROM movies WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};

module.exports = { getMovies, getMovieById, createMovie, updateMovie, deleteMovie };