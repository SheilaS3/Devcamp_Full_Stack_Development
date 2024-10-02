SELECT students_name, professors_name, COUNT(courses_name)
FROM grades g
LEFT JOIN students s
ON g.grades_students_id = s.students_id
LEFT JOIN professors p
ON g.grades_professors_id = p.professors_id
LEFT JOIN courses c
ON g.grades_courses_id = c.courses_id
GROUP BY students_name, professors_name
ORDER BY COUNT(courses_name) DESC;

