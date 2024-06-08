# Write your MySQL query statement below
WITH TotalProducts AS (
    SELECT COUNT(*) AS product_count
    FROM Product
),
CustomerProductCounts AS (
    SELECT customer_id, COUNT(DISTINCT product_key) AS product_count
    FROM Customer
    GROUP BY customer_id
)
SELECT customer_id
FROM CustomerProductCounts
WHERE product_count = (SELECT product_count FROM TotalProducts);