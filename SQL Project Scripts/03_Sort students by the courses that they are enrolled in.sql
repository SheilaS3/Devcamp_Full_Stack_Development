SELECT students_name, COUNT(courses_name)
FROM grades g
JOIN students s
ON g.grades_students_id = s.students_id
JOIN courses c
ON g.grades_courses_id = c.courses_id
GROUP BY students_name
ORDER BY COUNT(courses_name) DESC;
