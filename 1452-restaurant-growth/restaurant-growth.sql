# Write your MySQL query statement below
WITH cte AS (
    SELECT visited_on, SUM(amount) AS total_amount
    FROM Customer
    GROUP BY visited_on
),
cte2 AS (
    SELECT 
        c1.visited_on,
        (SELECT SUM(c2.total_amount)
         FROM cte c2
         WHERE c2.visited_on BETWEEN DATE_SUB(c1.visited_on, INTERVAL 6 DAY) AND c1.visited_on) AS amount,
        ROUND((SELECT AVG(c3.total_amount)
               FROM cte c3
               WHERE c3.visited_on BETWEEN DATE_SUB(c1.visited_on, INTERVAL 6 DAY) AND c1.visited_on), 2) AS average_amount
    FROM cte c1
)
SELECT 
    DATE_FORMAT(visited_on, '%Y-%m-%d') AS visited_on,
    amount,
    average_amount
FROM cte2
WHERE visited_on >= (SELECT MIN(visited_on) FROM cte2) + INTERVAL 6 DAY
ORDER BY visited_on;