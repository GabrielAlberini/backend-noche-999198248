-- CLIENTS

CREATE TABLE clients (
	id VARCHAR(36) DEFAULT (UUID()) PRIMARY KEY,
  full_name VARCHAR(30) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE  
);

INSERT INTO clients (full_name, email) 
VALUES ("Gabriel Alberini", "gabi@gmail.com");

-- PRODUCTS

CREATE TABLE products (
	id VARCHAR(36) DEFAULT (UUID()) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

INSERT INTO products (name, price) VALUES ("Pelota de fútbol", 10.2);

-- PURCHASES

CREATE TABLE purchases (
	id VARCHAR(36) DEFAULT (UUID()) PRIMARY KEY,
  client_id VARCHAR(36) NOT NULL,
  product_id VARCHAR(36) NOT NULL,
  quantity INT NOT NULL,
  purchase_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO purchases (client_id, product_id, quantity) 
VALUES ("ef2cb16c-cbe4-11f0-8d91-244bfe823757", "ae0f5ce2-cbe5-11f0-8d91-244bfe823757", 1); 

