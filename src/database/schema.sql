CREATE DATABASE filmes_db;

\c filmes_db;

CREATE TABLE directors (
id SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL
);

CREATE TABLE movies (
id SERIAL PRIMARY KEY,
titulo VARCHAR(150) NOT NULL,
genero TEXT,
anoLancamento INTEGER,
avaliacao DECIMAL(10,2),
director_id INTEGER REFERENCES directors(id) ON DELETE SET NULL
);

INSERT INTO directors (nome) VALUES
('Chris Columbus'),
('Patty Jenkins'),
('Rob Minkoff');

INSERT INTO movies (titulo, genero, anoLancamento, avaliacao, director_id) VALUES
('Harry Potter e o Prisioneiro de Azkaban', 'Infantil/Fantasia', 2004, 5.0, 1),
('Mulher-Maravilha', 'Ação/Fantasia', 2017, 4.2, 2),
('Rei Leão', 'Infantil/Aventura', 2019, 4.2, 3),
('Harry Potter e a Pedra Filosofal', 'Infantil/Fantasia', 2001, 4.9, 1),
('Mulher-Maravilha 1984', 'Ação/Fantasia', 2020, 3.0, 2);