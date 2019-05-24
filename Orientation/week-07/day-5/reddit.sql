CREATE DATABASE reddit

USE reddit;
Database changed
CREATE TABLE IF NOT EXISTS `posts` (
`id` INT(10) NOT NULL AUTO_INCREMENT,
`title` VARCHAR(100) NOT NULL,
`url` VARCHAR(100) NOT NULL,
`timestamp` TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
`score` INT(10),
PRIMARY KEY (`id`)
);

show tables from reddit;
+------------------+
| Tables_in_reddit |
+------------------+
| posts            |
+------------------+
