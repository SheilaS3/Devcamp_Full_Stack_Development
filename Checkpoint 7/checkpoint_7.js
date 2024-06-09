/*
EXERCISE:
Cree una función JS que acepte 4 argumentos. 
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. 
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!".
Si es más pequeño, la consola registra "¡El número es menor que 50!"
*/

function operations (first, second, third, fourth) {
    var result = (first + second) * (third + fourth);

    if (result > 50) {
        console.log("¡El número es mayor que 50!");
    } else if (result < 50) {
        console.log("¡El número es menor que 50!");
    } else {
        console.log("¡El número es 50!");
    }
}

operations(2,3,4,5); // ¡El número es menor que 50!
operations(2,3,4,10); // ¡El número es mayor que 50!
operations(2,3,4,6); // ¡El número es 50!