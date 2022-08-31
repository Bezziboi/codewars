-- For this challenge you need to create a simple SELECT statement that will return all columns from the products table, 
-- and join to the companies table so that you can return the company name.

-- products table schema
-- id
-- name
-- isbn
-- company_id
-- price
-- companies table schema
-- id
-- name
-- You should return all product fields as well as the company name as "company_name".

SELECT p.*, c.name AS company_name
  FROM products p
    LEFT JOIN companies c
      ON p.company_id = c.id