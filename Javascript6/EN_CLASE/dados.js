// cuando la página carga se dispara la funcion start
// callback
let dados = {};
const botonTirarDados = document.getElementById('tirar');
window.addEventListener('load',start);

function start() {
    // 1. Detectar cuando el jugador haga click sobre el boton tirar dados -> se ejecuta la funcion tirarDado
    botonTirarDados.addEventListener('click',tirarDado);
}

habilitarBoton = (status) => {
    botonTirarDados.disabled = status;
}

const generarAleatorio = () => {
    // Math.ceil(Math.random()*6 + 1);
    let random = parseInt(Math.random()*6 +1);
    return random;
}

const crearDados = () => {
    // Crea los 3 dados utilizando los numeros aleatorios de la funcion generarAleatorio
    let dado1 = generarAleatorio();
    let dado2 = generarAleatorio();
    let dado3 = generarAleatorio();
    // objetos {}
    Object.assign(dados,{d1 : dado1,d2 : dado2, d3: dado3});
    return dados;
}
tirarDado = () => {
    habilitarBoton(true); // deshabilita el boton :D
    let resultado = crearDados() // [1,5,4] 
    console.log("El resultado del tiro es : ");
    console.log(resultado);
    // f2. asignar los valores aleatorios a la cajas
    // f3. comprobarVictoria -> verificar si el usuario gano o no (cuando los 3 dados son iguales) -> 
    // f4. mensajeUsuario (comprobar funcion f3.)
    // f5. calcularTiempo -> funcion encarga de calcular el tiempo hasta que el usuario gano el juego
    habilitarBoton(false);
}
/*
callback -> funcion dentro de una funcion 
callback (funcion anonima + arrow function) 
 window.addEventListener('load',()=> {

*/