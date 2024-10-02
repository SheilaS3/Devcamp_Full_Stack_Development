SELECT professors_name, AVG(grades_qualification)
FROM grades g
JOIN professors p
ON g.grades_professors_id = p.professors_id
GROUP BY professors_name;
