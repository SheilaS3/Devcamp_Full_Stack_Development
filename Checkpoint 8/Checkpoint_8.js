// 1 - Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”

const miLista = [
    'velma',
    'exploradora',
    'jane',
    'john',
    'harry'
];

for (var i = 0; i < miLista.length; i++) { 
    console.log(miLista[i]);
}   

// 2 - Cree un bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.

var i = 0;
while (i < miLista.length) {
    console.log(miLista[i]);
    i++;
}

// 3 - Cree una función de flecha que devuelva "Hola mundo".

helloWorld = () => { console.log("Hola mundo"); }

helloWorld();