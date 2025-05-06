const express = require("express");
const router = express.Router();
const directorsController = require("../controllers/directorsController.js");

router.get("/", directorsController.getAllDirectors);

module.exports = router;