SELECT students_name, MAX(grades_qualification)
FROM grades g
JOIN students s
ON g.grades_students_id = s.students_id
GROUP BY students_name;