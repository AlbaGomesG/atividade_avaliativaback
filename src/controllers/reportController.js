const PDFDocument = require('pdfkit');

const moviesModel = require('../models/moviesModel.js');

const exportMoviesPDF = async (req, res) => {
    try {
        const movies = await moviesModel.getMovies();

        res.setHeader('Content-Type', 'applicaion/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=movies.pdf');

        const doc = new PDFDocument({margin: 50});
        doc.pipe(res);

        doc.fillColor("#0A3D91").fontSize(22).text("Relatório de Filmes", {align: "center", underline: true});
        doc.moveDown(2);

        doc.fillColor("#0A3D91").fontSize(12).text("Id, titulo, gênero, ano de Lançamento, avaliação, Diretor", {align: "center", underline: true});
        doc.moveDown(0.5);

        movies.forEach((movie) => {
            doc.text(`${movie.id} | ${movie.titulo} | ${movie.genero} | ${movie.anoLancamento} | ${movie.avaliacao} | ${movie.director_nome || "Sem Diretor"}`, {align: "center"});
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF!" });
    }
};

module.exports = { exportMoviesPDF };