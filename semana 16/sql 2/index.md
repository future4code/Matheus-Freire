### Exercício 1
a) ALTER TABLE Actor DROP COLUMN salary => esse comando ia deleter a coluna de salário.
b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); => altera a coluna gender para sex
c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); => a coluna gender vai poder receber mais caracteres
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2
a)UPDATE Actor
SET name = "Moacyr Franco", birth_date="1960-02-17"
WHERE id="004";

b)update Actor
SET name="JULIANA PAES"
WHERE id="005";

UPDATE Actor
SET name="juliana paes"
where id="005";

c) UPDATE Actor
SET name="Moacyr Franco", salary=600000,birth_date="2020-02-10", gender="male"
WHERE id="005";

d) Ele não adiciona a table pois não existe aquele id

### Exercício 3
a)DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b)DELETE from Actor
WHERE gender="male" AND salary>1000000;

### Exercício 4
a)SELECT MAX(salary) FROM Actor;
b)select MIN(salary) FROM Actor
WHERE gender="female";
c)SELECT COUNT(*) FROM Actor
where gender="female";
d)SELECT SUM(salary) from Actor;

### Exercício 5
a)SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
Separa a quantidade de homens e mulheres

b)SELECT id,name FROM Actor
ORDER BY name desc;
c)SELECT name,salary from Actor
where gender="male"
order by salary asc;
d)SELECT name from Actor
WHERE gender="male"
order by salary asc
LIMIT 3;
e)SELECT AVG(salary),gender From Actor
group by gender;

### Exercício 6
a)ALTER TABLE filmes
ADD data_limite date; 

b)ALTER TABLE filmes
CHANGE avaliacao avaliacao float;

c)UPDATE filmes 
SET data_limite="2020-12-31"
WHERE id="002";

### Exercício 7
a) SELECT count(*)  FROM filmes
where avaliacao>7.5;

b)select AVG(avaliacao) FROM filmes; 

c)SELECT COUNT(*) FROM filmes
where data_limite>curdate();
d)SELECT COUNT(*) FROM filmes
where data>curdate();

e)SELECT MAX(avaliacao)  from filmes;

f)SELECT Min(avaliacao)  from filmes;

### Exercício 8
a)SELECT nome FROM filmes
order by nome asc;
b)SELECT nome from filmes
order by nome desc
limit 5;
c)select nome,data_limite from filmes
order by data_limite asc
limit 3;
d)select nome,avaliacao from filmes
order by avaliacao desc
limit 3;

