# Exercise 1:
list = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

tuple = ('January', 'February', 'March', 'April')

float = 12.8

integer = 105

decimal = 30.40

dictionary = {
    "cities": ["Bilbao", "Madrid", "Barcelona"],
    "countries": ["Spain", "France", "Portugal"]
}

# Exercise 2:
import math
print(math.ceil(float))

# Exercise 3:
import math
print(math.sqrt(float))

# Exercise 4:
dictionary_items = dictionary.items()
print(list(dictionary_items)[0])

# Exercise 5:
print(tuple[1])

# Exercise 6:
list.append("Saturday")
print(list)

# Exercise 7:
list[0] = "Sunday"
print(list)

# Exercise 8:
list.sort()
print(list)

# Exercise 9:
tuple += ("May",)
print(tuple)