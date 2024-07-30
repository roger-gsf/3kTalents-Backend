CREATE DATABASE roger_library;
USE roger_library; 

-- Tables:
CREATE TABLE IF NOT EXISTS autors (
    autor_id INT PRIMARY KEY AUTO_INCREMENT,
    autor_name VARCHAR(255) NOT NULL,
    autor_nacionality VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    book_title VARCHAR(100) NOT NULL,
    book_genre VARCHAR(100) NOT NULL,
    book_publication DATE,
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES autors(autor_id)
);

CREATE TABLE IF NOT EXISTS costumers (
    costumer_id INT PRIMARY KEY AUTO_INCREMENT,
    costumer_name VARCHAR(255) NOT NULL,
    costumer_adress VARCHAR(100),
    costumer_phone VARCHAR(15)
);

CREATE TABLE IF NOT EXISTS loans (
    loan_id INT PRIMARY KEY AUTO_INCREMENT,
    book_id INT,
    costumer_id INT,
    loan_date DATE,
    loan_devolution DATE,
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (costumer_id) REFERENCES costumers(costumer_id)
);

-- Inserts:
INSERT INTO autors (autor_name, autor_nacionality) VALUES 
('J.K. Rowling', 'British'),
('George R.R. Martin', 'American'),
('J.R.R. Tolkien', 'British');

INSERT INTO books (book_title, book_genre, book_publication, autor_id) VALUES 
('Harry Potter and the Philosopher Stone', 'Fantasy', '1997-06-26', 1),
('A Game of Thrones', 'Fantasy', '1996-08-06', 2),
('The Hobbit', 'Fantasy', '1937-09-21', 3);

INSERT INTO costumers (costumer_name, costumer_adress, costumer_phone) VALUES 
('John Doe', '123 Elm St', '555-1234'),
('Jane Smith', '456 Oak St', '555-5678'),
('Alice Johnson', '789 Pine St', '555-9012');

INSERT INTO loans (book_id, costumer_id, loan_date, loan_devolution) VALUES 
(1, 1, '2024-01-01', '2024-01-15'),
(2, 2, '2024-02-01', '2024-02-15'),
(3, 3, '2024-03-01', '2024-03-15');

-- Alterations:
ALTER TABLE autors 
ADD COLUMN autor_birth DATE, 
ADD COLUMN autor_biography TEXT;

ALTER TABLE books 
ADD COLUMN book_publisher VARCHAR(50), 
ADD COLUMN book_pages INT, 
ADD COLUMN book_language VARCHAR(50);

ALTER TABLE costumers 
ADD COLUMN costumer_email VARCHAR(100),
ADD COLUMN costumer_birth DATE;

ALTER TABLE loans
ADD COLUMN loan_pre_devolution DATE,
ADD COLUMN loan_status VARCHAR(30);

-- Updates:
UPDATE autors 
SET autor_birth = '1965-07-31', autor_biography = 'J.K. Rowling is a british writer, autor of Harry Potter saga.' 
WHERE autor_id = 1;

UPDATE books SET book_publisher = 'Bloomsbury', book_pages = 223, book_language = 'English' 
WHERE book_id = 1;

UPDATE costumers SET costumer_email = 'anna.beatrix@example.com', costumer_birth = '1980-01-15' 
WHERE costumer_id = 1;

UPDATE loans SET loan_pre_devolution = '2023-07-15', loan_status = 'In progress' 
WHERE loan_id = 1;