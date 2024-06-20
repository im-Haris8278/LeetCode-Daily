# Write your MySQL query statement below
WITH BoardingOrder AS (
    SELECT
        person_name,
        weight,
        SUM(weight) OVER (ORDER BY turn) AS cumulative_weight
    FROM Queue
)
SELECT
    person_name
FROM
    BoardingOrder
WHERE
    cumulative_weight <= 1000
ORDER BY
    cumulative_weight DESC
LIMIT 1;