CREATE DATABASE IF NOT EXISTS dashboard_db;
USE dashboard_db;

CREATE TABLE IF NOT EXISTS expenditure (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    year INT NOT NULL
);

INSERT INTO expenditure (category, amount, year) VALUES
('Housing and Utilities', 24500.00, 2022),
('Food and Beverages', 9200.50, 2022),
('Healthcare', 12100.00, 2022),
('Transportation', 8500.75, 2022),
('Recreation', 4100.00, 2022),

('Housing and Utilities', 25800.00, 2023),
('Food and Beverages', 9800.25, 2023),
('Healthcare', 12900.00, 2023),
('Transportation', 8800.00, 2023),
('Recreation', 4300.50, 2023),

('Housing and Utilities', 27100.00, 2024),
('Food and Beverages', 10400.00, 2024),
('Healthcare', 13500.50, 2024),
('Transportation', 9100.25, 2024),
('Recreation', 4600.00, 2024);