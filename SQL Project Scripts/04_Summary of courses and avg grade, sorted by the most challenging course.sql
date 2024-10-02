SELECT courses_name, AVG(grades_qualification)
FROM grades g
JOIN courses c
ON g.grades_courses_id = c.courses_id
GROUP BY courses_name
ORDER BY AVG(grades_qualification) ASC;