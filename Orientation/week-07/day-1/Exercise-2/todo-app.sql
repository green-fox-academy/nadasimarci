CREATE DATABASE todoDatabase;

USE todoDatabase;

CREATE TABLE todo( id INT AUTO_INCREMENT, task VARCHAR(100), PRIMARY KEY (id) );
CREATE TABLE doing( id INT AUTO_INCREMENT, task VARCHAR(100), PRIMARY KEY (id) );
CREATE TABLE review( id INT AUTO_INCREMENT, task VARCHAR(100), PRIMARY KEY (id) );
CREATE TABLE done( id INT AUTO_INCREMENT, task VARCHAR(100), PRIMARY KEY (id) );

 show tables;
+------------------------+
| Tables_in_todoDatabase |
+------------------------+
| doing                  |
| done                   |
| review                 |
| todo                   |
+------------------------+

INSERT into todo (task) values ("eladni a bordo betyart");
insert into todo (task) values ("elkolteni az arat");

select * from todo;
+----+------------------------+
| id | task                   |
+----+------------------------+
|  1 | eladni a bordo betyart |
|  2 | elkolteni az arat      |
+----+------------------------+

