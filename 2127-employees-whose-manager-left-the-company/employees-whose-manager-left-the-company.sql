# Write your MySQL query statement below
WITH table1 AS
(
    SELECT manager_id FROM Employees WHERE manager_id
    NOT IN (SELECT employee_id FROM Employees) AND manager_id IS NOT NULL
)

SELECT employee_id FROM Employees
WHERE manager_id IN (SELECT * FROM table1) AND salary < 30000
ORDER BY employee_id ASC  