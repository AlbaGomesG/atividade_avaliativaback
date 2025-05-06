const PDFDocument = require("pdfkit");

const moviesModel = require("../models/moviesModel");

const exportMoviesPDF = async (req, res) => {
    try {
        const movies = await moviesModel.getMovies();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=movies.pdf");

        const doc = new PDFDocument({margin: 50});
        doc.pipe(res);

        doc.fillColor("#0A3D91").fontSize(24).text("Relatório de Filmes", {align: "center", underline: true});
        doc.moveDown(1);

        doc.fillColor("#0A3D91").fontSize(14).text("Id, Título, Gênero, Avaliação, Diretor", {underline: true});
        doc.moveDown(0.5);

        movies.forEach((movie) => {
            doc.text(`${movie.id} | ${movie.titulo} | ${movie.genero} | ${movie.avaliacao} | ${movie.director_nome || "Sem Diretor"}`,);
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar PDF!"});
    }
};

module.exports = { exportMoviesPDF };