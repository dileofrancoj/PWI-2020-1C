async function sumar(a,b) {
    let suma = await a + b; // consulta a la base de datos | generación pdf | mail
    return suma;
}

async function resultado() {
    let resultado = await sumar(1,2); // Operacion para traer registro de una base de datos
    console.log(resultado);
}

resultado();