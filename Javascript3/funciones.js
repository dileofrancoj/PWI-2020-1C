// 1. ¿Que es una funcion?
// ¿Para que sirve una funcion?

// Es un bloque de codigo que se ejecuta cuando es llamado -> Algoritmo
// Reutilizar el codigo
// Las funciones pueden o no tener parametros | argumento (lo que utiliza la funcion para resolver una tarea)
// Las funciones pueden o no retornar un elemento

// Las variables dentro de las funciones SON PRIVADAS

function message() {
    document.write("Bienvenido a mi fabuloso sitio web :D<br>");
    document.write("Es un placer tenerte aqui terricola :D<br>");
}
// arrow function ES2016
message2 = () => {
    document.write("Otra funcion distinta de Javascript")
}

// Ejemplo de calculadora RUSTICA
// numero1 = 8 , numero2 = 4
function sumar(n1,n2) {
    let suma = n1 + n2; // 12
    document.write(`La suma de los numeros es : ${suma}<br>`);
    // exportar el valor de la suma (suma)
    return suma; // exportamos un dato que inicialmente era privado a la funcion
}
// 
// document.write(suma); // suma is not defined
restar = (n1,n2) => {
    let resta = n1 - n2;
    document.write(`La resta de los numeros es : ${resta}<br>`);
}

multiplicar = (n1,n2) => {
    let multiplicar = n1 * n2;
    document.write(`La Multiplicacion de los numeros es : ${multiplicar}<br>`);

}
// Los parametros se pasan por valor
dividir = (n1,n2) => {
    if(n2 == 0) {
        document.write(`Math error`);
    } else {
        let division = n1/n2;
        document.write(`La Division de los numeros es : ${division}<br>`);
    
    }
}
// 8 , 7 
raizCuadrada = (n1,n2) => {
    // El numero al que se le calcula la raiz tiene que ser >= 0
    // La raiz de la suma de los numeros
    let resultadoSuma = sumar(n1,n2); // almacenamos el return de la funcion sumar
    // document.write(`Èl resultado del return de la suma es : ${resultadoSuma}`)
    if(resultadoSuma >= 0) {
        let raiz = Math.sqrt(resultadoSuma);
        document.write(`La raiz cuadrada de la suma de los numeros es : ${raiz}`);
    }
}
// Multiplicar y dividir (0 Math error ! :D)
// SOLID -> Se recomienda que las funciones no tengan mas de dos parametros
// JSON