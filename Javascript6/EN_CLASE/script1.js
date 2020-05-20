// async
window.addEventListener('load',start); // operacion demora 50ms
// console.log("Se cargó correctamente el script1.js"); // operacion demora 20 ms
const caracteresDisponibles = 30;
const textareaElement = document.getElementById('comentario');
const spanElement = document.getElementById('caracteres');
function start() {
    // Eventos en js : click, dbclick, focus, blur, keyup, keydown, keypress, mousePress? mouseMove
    textareaElement.addEventListener('keyup',verificarCaracteres);
}

const verificarCaracteres = () => {
    // value -> texto dentro del elemento 
    // value.length -> cantidad de caracteres
    let caracteres = textareaElement.value.length;
    // 30 - cantidad de caracteres escritos
    let restaCaracteres =  caracteresDisponibles - caracteres;
    spanElement.innerHTML = restaCaracteres;
    if(restaCaracteres > 0) {
        spanElement.style.color = "green";
    } else {
        spanElement.style.color = "red";
    }
}