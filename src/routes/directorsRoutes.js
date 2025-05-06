const express = require("express");
const router = express.Router();
const directorsController = require("../controllers/directorsController.js");

/**
 * @swagger
 * tags:
 *   name: Directors
 *   description: Gerenciamento de diretores
 */

/**
 * @swagger
 * /api/directors:
 *   get:
 *     summary: Lista todos os diretores
 *     tags: [Directors]
 *     responses:
 *       200:
 *         description: Lista de diretores
 */

router.get("/", directorsController.getAllDirectors);

/**
 * @swagger
 * /api/directors/{id}:
 *   get:
 *     summary: Busca diretor por ID
 *     tags: [Directors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Diretor encontrado
 *       404:
 *         description: Diretor não encontrado
 */

router.get("/:id", directorsController.getDirector);

/**
 * @swagger
 * /api/directors:
 *   post:
 *     summary: Cria uma novo diretor
 *     tags: [Directors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Casa criada
 */


router.post("/", directorsController.createDirector);

/**
 * @swagger
 * /api/directors/{id}:
 *   put:
 *     summary: Atualiza um diretor
 *     tags: [Directors]
 *     parameters:
 *       - in: path
 *         nome: id
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
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Diretor atualizado
 */


router.put("/:id", directorsController.updateDirector);

/**
 * @swagger
 * /api/directors/{id}:
 *   delete:
 *     summary: Deleta um diretor
 *     tags: [Directors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Diretor deletado
 */

router.delete("/:id", directorsController.deleteDirector);

module.exports = router;