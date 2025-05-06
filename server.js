require("dotenv").config();
const express = require("express");
const cors = require("cors");
const directorsRoutes = require("./src/routes/directorsRoutes");
const moviesRoutes = require("./src/routes/moviesRoutes");
const reportsRoutes = require("./src/routes/reportRoutes");
const setupSwagger = require("./src/config/swagger");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/directors", directorsRoutes);
app.use("/api", moviesRoutes);
app.use("/api", reportsRoutes);
setupSwagger(app);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
