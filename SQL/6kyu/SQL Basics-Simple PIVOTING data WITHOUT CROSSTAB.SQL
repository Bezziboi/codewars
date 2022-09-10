-- You need to build a pivot table WITHOUT using CROSSTAB function.
-- Having two tables products and details you need to select a pivot table of products with counts of details occurrences
-- (possible details values are ['good', 'ok', 'bad'].

-- Results should be ordered by product's name.

-- Model schema for the kata is:

-- schema

-- your query should return table with next columns

-- name
-- good
-- ok
-- bad

SELECT name, g.count as "good", o.count as "ok", b.count as "bad"
FROM products p 
  JOIN (SELECT product_id, COUNT(*) AS "count" FROM details WHERE DETAIL = 'good' GROUP BY product_id) g ON p.id = g.product_id
  JOIN (SELECT product_id, COUNT(*) AS "count" FROM details WHERE DETAIL = 'ok' GROUP BY product_id) o ON p.id = o.product_id
  JOIN (SELECT product_id, COUNT(*) AS "count" FROM details WHERE DETAIL = 'bad' GROUP BY product_id) b ON p.id = b.product_id
GROUP BY name, g.count, o.count, b.count
ORDER BY name;