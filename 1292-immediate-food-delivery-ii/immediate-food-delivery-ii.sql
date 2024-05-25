# Write your MySQL query statement below
WITH FirstOrders AS (
    SELECT customer_id, MIN(order_date) AS first_order_date
    FROM Delivery
    GROUP BY customer_id
)
SELECT
    ROUND(
        100.0 * SUM(CASE 
                        WHEN D.order_date = D.customer_pref_delivery_date THEN 1 
                        ELSE 0 
                    END) / COUNT(*), 
        2
    ) AS immediate_percentage
FROM Delivery D
JOIN FirstOrders FO
ON D.customer_id = FO.customer_id AND D.order_date = FO.first_order_date;