function pintarElemento(element,color) {
    element.style.border =`1px solid ${color}`;

}
function ShowHidePassword() {
    let passwordElement = document.getElementById('password');
    // ^[A-Z](.*)$[0-9]
    passwordElement.type == "text" ? passwordElement.type = "password" : passwordElement.type ="text";
}
// function pintarVerde(element) {
//     element.style.border = "1px solid green";
// }
// function pintarRojo(element) {
//     element.style.border ="1px solid red";
// }
function mantenerFoco(element) {
    element.focus();
}
function setearElemento(element,mensaje="") {
    element.innerHTML = mensaje;
}
function comprobarUsuario() {
    let inputObject = document.getElementById('usuario');
    let spanObject = document.getElementById('mensajeErrorUsuario');
    if(inputObject.value.length > 5) {
        pintarElemento(inputObject,"green");
        setearElemento(spanObject,"");
    } else {
        pintarElemento(inputObject,"red");
        mantenerFoco(inputObject);
        setearElemento(spanObject,"Minimo 6 caracteres");
    }
}
function comprobarCorreo() {
    let inputObject = document.getElementById('correo');
    let spanObject = document.getElementById('mensajeErrorCorreo');
    if(inputObject.value.length > 10){
        pintarElemento(inputObject,"green");
        setearElemento(spanObject,""); 
    } else {
        pintarElemento(inputObject,"violet");
        mantenerFoco(inputObject);
        setearElemento(spanObject,"El correo es invalido");
    }
}