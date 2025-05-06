const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController.js");
const upload = require("../config/upload.js");

const apiKeyMiddleware = require("../config/apiKey.js");

router.use(apiKeyMiddleware);

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Lista todos os filmes
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: genero
 *         schema:
 *           type: string
 *         description: Filtro por gênero
 *     responses:
 *       200:
 *         description: Lista de filmes
 */

router.get("/movies", moviesController.getAllMovies);

/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: Busca filme por ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Filme encontrado
 *       404:
 *         description: Filme não encontrado
 */

router.get("/movies/:id", moviesController.getMovie);

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Cria um novo filme
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               genero:
 *                 type: string
 *               anoLancamento:
 *                type: number
 *               avaliacao:
 *                type: number
 *               director_id:
 *                 type: integer
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Bruxo criado
 */

router.post("/movies", upload.single("photo"), moviesController.createMovie);

/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Atualiza um filme
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               genero:
 *                 type: string
 *     responses:
 *       200:
 *         description: Filme atualizado
 */

router.put("/movies/:id", moviesController.updateMovie);

/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Deleta um filme
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Filme deletado
 */

router.delete("/movies/:id", moviesController.deleteMovie);

module.exports = router;