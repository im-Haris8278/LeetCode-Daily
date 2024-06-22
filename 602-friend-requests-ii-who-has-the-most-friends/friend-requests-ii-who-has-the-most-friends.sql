# Write your MySQL query statement below
WITH new AS (
(SELECT accepter_id AS id, count(*) AS num FROM RequestAccepted
GROUP BY 1)
UNION ALL
(SELECT requester_id AS id, count(*) AS num FROM RequestAccepted
GROUP BY 1)
)

SELECT id, sum(num) AS num FROM new
GROUP BY id
ORDER BY 2 DESC LIMIT 1