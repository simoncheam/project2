

#### Tables
* Users
	* id INT PK NOT NULL AI
	* email VARCHAR(60) NOT NULL
	* hash VARCHAR(60) NOT NULL
	* role VARHCAR(25) DEFAULT 'admin'
	* _created DATETIME DEFAULT CURRENT_TIMESTAMP
* Tokens
	* id INT PK NOT NULL AI
	* userid INT NOT NULL FK References Users(id)
	* token TEXT NULL
	* _created DATETIME DEFAULT CURRENT_TIMESTAMP
* Categories
	* id INT PK NOT NULL AI
	* name VARCHAR(50) NOT NULL
* Books
	* id INT PK NOT NULL AI
	* categoryid INT NOT NULL FK References Categories(id)
	* title VARCHAR(100) NOT NULL
	* author VARCHAR(100) NOT NULL
	* price DECIMAL(5,2) NOT NULL
	* _created DATETIME DEFAULT CURRENT_TIMESTAMP

#### Schema
```
CREATE TABLE `Categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `price` decimal(5,2) NOT NULL DEFAULT '0.00',
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_categoryid_category_id_idx` (`categoryid`),
  CONSTRAINT `fk_categoryid_category_id` FOREIGN KEY (`categoryid`) REFERENCES `Categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `role` varchar(25) DEFAULT 'admin',
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` text,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `userid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_userid_users_id_idx` (`userid`),
  CONSTRAINT `fk_userid_users_id` FOREIGN KEY (`userid`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO `Categories` VALUES (1,'Science Fiction'),(2,'Fantasy'),(3,'Political Fiction'),(4,'Thriller'),(5,'Mystery');
INSERT INTO `Books` VALUES (2,2,'The Hobbit','J.R.R. Tolkien',9.99,'2019-02-26 13:06:09'),(3,3,'1984','George Orwell',7.49,'2019-02-26 13:08:52'),(4,4,'The Outsider','Stephen King',20.63,'2019-02-26 13:11:07'),(5,5,'The Adventures of Sherlock Holmes','Sin Arthur Conan Doyle',8.99,'2019-02-26 13:12:33'),(11,1,'The Martian','Andy Weir',12.99,'2019-02-27 13:28:04');
```