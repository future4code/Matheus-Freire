### Exercício 1
a) Foreign Key é a chave primária que se relaciona com outra tabela.
b)INSERT INTO rating(id,comment,rate,movie_id)
VALUES (
"001", "Muito Bom","8", "004"
);
c) o erro deu porque a foreign key não consegue se relacionar com o id que não existe de outra tabela.
d) alter table filmes drop avaliacao;

### Exercício 2
a) o movie_id vai relacionar com o id da tabela de files e o actor_id vai relacionar com a tabela de Actor
b)INSERT INTO MovieCast(movie_id,actor_id)
VALUES
("20","30"); => o erro ocorre pois não tem na tabela de ator nem de filmes um id com aquela referência
d)não pode apagar o ator porque ele já está sendo chamado em outra tabela

### Exercício 3
a) on é o comparador
b)SELECT filmes.nome,filmes.id, rating.rate FROM filmes
INNER JOIN rating
ON filmes.id =rating.movie_id;

### Exercício 4
a) SELECT movie_id, filmes.nome,rating.rate,rating.comment from filmes
left join rating
ON filmes.id=rating.movie_id;

b)SELECT movie_id,filmes.nome,actor_id FROM filmes
right JOIN MovieCast 
ON MovieCast.movie_id=filmes.id;

c)SELECT AVG(rating.rate) ,filmes.id,filmes.nome FROM filmes
left join rating 
ON filmes.id=rating.movie_id
GROUP BY filmes.id;


### Exercício 5
a) SELECT movie_id,filmes.nome, actor_id, Actor.name FROM filmes
LEFT JOIN MovieCast 
ON MovieCast.movie_id=filmes.id 
JOIN Actor 
ON Actor.id=MovieCast.actor_id;

b)SELECT filmes.nome,Actor.name,rating.rate,rating.comment FROM filmes 
left join MovieCast
ON MovieCast.movie_id=filmes.id
 join Actor
ON Actor.id=actor_id
left join rating
on rating.movie_id=filmes.id;


### Exercício 6
1)CREATE table oscar(
categoria ENUM("melhor direção","melhor elenco"),
movie_id varchar(255),
ano year,
PRIMARY KEY (categoria,ano),
FOREIGN KEY(movie_id) references filmes(id)
);
drop table oscar;

INSERT INTO oscar(id,categoria,movie_id)
values("1", "melhor direção", "001"),
("2", "melhor elenco", "004");

SELECT filmes.nome, oscar.categoria from filmes
left join oscar
ON oscar.movie_id=filmes.id;