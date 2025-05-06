const express = require("express");
const router = express.Router();
const directorsController = require("../controllers/directorsController.js");

router.get("/", directorsController.getAllDirectors);
router.get("/:id", directorsController.getDirector);
router.post("/", directorsController.createDirector);

module.exports = router;