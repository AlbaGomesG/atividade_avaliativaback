require("dotenv").config();
const express = require("express");
const cors = require("cors");
const moviesRoutes = require("./src/routes/moviesRoutes");
const directorsRoutes = require("./src/routes/directorsRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/wizards", moviesRoutes);
app.use("/api/houses", directorsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
