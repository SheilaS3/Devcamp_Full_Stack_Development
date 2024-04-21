# 1 - Cree un bucle For de Python:
num_list = range(1, 21, 2)
new_list = []

for num in num_list:
    new_list.append(num * 2)

print(new_list)
       
# 2 - Cree una función de Python llamada suma que tome 3 argumentos y devuelva la suma de los 3:

def suma(one, two, three):
    return one + two + three


print(suma(10, 5, 20))
    
# 3 - Cree una función lambda con la misma funcionalidad que la función de suma que acaba de crear:

suma = lambda one, two, three: one + two + three

print(suma(10, 5, 20))

# 4 - Utilizando la siguiente lista y variable, determine si el valor de la variable coincide o no con un valor de la lista. *Sugerencia, si es necesario, utilice un bucle for in y el operador in.

nombre = 'Enrique'

lista_nombre = 'Jessica', 'Paul', 'George', 'Henry', 'Adán'

for name in lista_nombre:
    if nombre in lista_nombre:
        print('The name matches')
    else:
        print('The name doesn\'t match')
    
print(name)