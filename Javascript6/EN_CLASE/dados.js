// cuando la página carga se dispara la funcion start
// callback

const DADOS_A_TIRAR = 3;
const botonTirarDados = document.getElementById('tirar');
const h6MensajeUsuario = document.getElementById('mensajeUsuario');
const h6IntentoTiros = document.getElementById('intentos');
window.addEventListener('load',start);
let intentosTiros = 0;
let tiempoTranscurrido = 0;
function start() {
    calcularTiempo();
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
    let dados = {}; // dados vacio
    // parametro cantidad dados
    let dado1 = generarAleatorio();
    let dado2 = generarAleatorio();
    let dado3 = generarAleatorio();
    Object.assign(dados,{d1 : dado1,d2 : dado2, d3: dado3});
    return dados;
}

const asignarValores = (dados) => {
    document.getElementById('d1').innerHTML = dados.d1;
    document.getElementById('d2').innerHTML = dados.d2;
    document.getElementById('d3').innerHTML = dados.d3;
}

const comprobarVictoria = (dados) => {
    let resultado;
    /*
    if(dados.d1 == dados.d2 && dados.d1 == dados.d3) {
        resultado = true;
        setTiros(0);
    } else {
        resultado = false
    }
    return resultado
    */
    (dados.d1 == dados.d2 && dados.d1 == dados.d3) ? 
    (   
        resultado = true,
        setTiros(""),
        setTiempo(tiempoTranscurrido)
    ) : 
    resultado = false;
   
    return resultado; // true | false
}

const mensajeUsuario = (victoria) => {
    // CONDICION POR OMISION -> SIEMPRE SE PREGUNTA SI ES VERDADERO 
    /*if(estado) {}*/
    /*if(estado == true) {}*/
    victoria ? h6MensajeUsuario.innerHTML = '¡GANASTE!' : h6MensajeUsuario.innerHTML = 'Intenta de nuevo...';
}

setTiros = (nro) => {
    h6IntentoTiros.innerHTML = nro; 
}

setTiempo = (nro) => {
    document.getElementById('tiempo').innerHTML = `Tardaste : ${nro} segundos en ganar`;
}

const calcularTiempo = () => {
    // setInterval | setTimeOut
    setInterval(()=> {
        tiempoTranscurrido = tiempoTranscurrido + 1;
        // console.log(tiempoTranscurrido);
    },1000)
}

tirarDado = () => {
    intentosTiros++;
    habilitarBoton(true); // deshabilita el boton :D
    setTiros(intentosTiros); // (1/(6^3))
    let resultado = crearDados() // {d1 : 5, d2 : 3, d3 : 1}
    asignarValores(resultado);
    let resultadoTiro = comprobarVictoria(resultado); // true / false
    mensajeUsuario(resultadoTiro);
    habilitarBoton(false);
    
}
/*
callback -> funcion dentro de una funcion 
callback (funcion anonima + arrow function) 
 window.addEventListener('load',()=> {

*/