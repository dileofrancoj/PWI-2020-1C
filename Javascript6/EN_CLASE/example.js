const CANTIDAD_DADOS = 6;
const vector = [1,4,6,8,9,12,'franco'];
// const obj = [
//     {nombre : 'franco'},
//     {nombre : }
// ]
const generarAleatorio = () => {
    let random = parseInt(Math.random()*6 +1);
    return random;
}

const crearDados = (CANTIDAD_DADOS) => {
    let dados = []; // dados vacio
    for(let i = 0; i < CANTIDAD_DADOS; i++) {
        let d = generarAleatorio();
        dados.push(d);
    }
    console.log(dados);
}

// crearDados(CANTIDAD_DADOS);
vector.pop();
vector.push(15);
vector.forEach(i => console.log(i))