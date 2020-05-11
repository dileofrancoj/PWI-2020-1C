// 1. ¿Que es una funcion?
// ¿Para que sirve una funcion?

// Es un bloque de codigo que se ejecuta cuando es llamado -> Algoritmo
// Reutilizar el codigo
// Las funciones pueden o no tener parametros | argumento (lo que utiliza la funcion para resolver una tarea)
// Las funciones pueden o no retornar un elemento

// Estoy creando una funcion llamada message que no tiene parametros
function message() {
    document.write("Bienvenido a mi fabuloso sitio web :D<br>");
    document.write("Es un placer tenerte aqui terricola :D<br>");
}
// arrow function ES2016
message2 = () => {
    document.write("Otra funcion distinta de Javascript")
}

// Ejemplo de calculadora RUSTICA
// n1 = 8 , n2 = 4
function sumar(n1,n2) {
    // Argumentos
    let suma = n1 + n2; // 12
    document.write(`La suma de los numeros es : ${suma}<br>`);
}

restar = (n1,n2) => {
    let resta = n1 - n2;
    document.write(`La resta de los numeros es : ${resta}<br>`);

}