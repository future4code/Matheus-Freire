**1**
    *a > VARCHAR é um texto de comprimento variável
        PRIMARY KEY - é de valor unico e não pode conter valores NULL
        NOT NULL - é obrigatório
        DATE - representa uma data (YYYY-MM-DD)
    **b** SHOW DATABASES - mostra todas as databases do sql com sua conta
            SHOW TABLES - Mostra as tabelas existentes no seu database
     **c** o describe mostra a tabela e mostra se os valores nela são obrigatórios

**2**
    **a** INSERT INTO Actor (id,name,salary,birth_date,gender)
          values("002", "Glória Pires", "1200000", "1963-08-23", "female");
    **b** Valor de id duplicado 
    **c**   INSERT INTO Actor (id, name, salary,birth_date,gender)
            VALUES(
            "003", 
            "Fernanda Montenegro",
            "300000", 
            "1929-10-19", 
            "female"
);
    **d**  INSERT INTO Actor (id,name, salary, birth_date, gender)
           VALUES("004","novo",400000,"1949-04-18", "male");

     **e**  INSERT INTO Actor (id, name, salary, birth_date, gender)
            VALUES("005", "Juliana Paes",719333.33,"1979-03-26", "female");

     **f**   INSERT INTO Actor (id, name, salary, birth_date, gender)
             VALUES("006","Tarcísio", 30000, "1936-10-01","male");

            INSERT INTO Actor (id, name, salary, birth_date, gender)
            VALUES("007", "Paola", 33500, "1982-04-02", "female");

    **3**
        **a** SELECT * FROM Actor
              Where gender="male";

         **b** SELECT salary FROM Actor
               Where name="tony ramos";

        **d** SELECT id,name,salary FROM Actor
              Where salary<=500000;

      **4**

      **b** SELECT * FROM Actor
            WHERE name NOT LIKE "A%" AND salary> 350000;

       **c**  SELECT * FROM Actor
                WHERE name LIKE "%G%" OR name LIKE "%g%";
 **D** 
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name Like "%A%" OR name LIKE "%g%" OR name Like "%G%") AND ( salary >=350000 AND salary <=900000); 

 **5**  A) TEXT não tem limite específico de tamanho

 CREATE TABLE filmes(
id varchar(255) PRIMARY KEY, 
nome VARCHAR(255) NOT NULL, 
sinopse TEXT NOT NULL, 
data DATE NOT NULL, 
avaliacao INT NOT NULL
);

INSERT INTO filmes (id,nome,sinopse,data,avaliacao)
VALUES ("001","Se Eu Fosse Você","Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos","2006-01-06",7),
("002","Doce de mãe","Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela","2012-12-27",10),
("003","Dona Flor e Seus Dois Maridos","Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.","2017-11-02",8),
("004","Minha Mãe é Uma Peça","Dona Hermínia é uma mulher de meia idade, divorciada do marido, que a trocou por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina e Juliano, que já estão bem grandinhos","2013-06-21",10);
 
 **6**

 SELECT id,nome,avaliacao FROM filmes
WHERE id="001";

SELECT nome FROM filmes
WHERE nome LIKE "Se eu FOSSE VOCÊ";

SELECT id,nome,sinopse FROM filmes
WHERE avaliacao>7;

**7**
select nome FROM filmes
WHERE nome LIKE "%fosse%";

select nome FROM filmes
WHERE nome LIKE "%vida%" OR sinopse LIKE "%casados%";

SELECT * FROM filmes
WHERE data < "2020-05-04";