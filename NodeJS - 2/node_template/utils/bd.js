const mysql = require('mysql'); // Modulo de MySQL instalado
const util = require('util'); // convertir a notacion ES6 la libreria mysql (async/await);
const pool = mysql.createPool({
    host : 'localhost', // host
    port : 3306, // puerto por default
    user : 'root', // usuario db
    password : '', // password db
    database : 'pwi_1c_2020',
    connectionLimit : 10 // numero de conexiones concurrentes
}) // referencia de conexion (select -> pool) | (insert -> pool)
pool.query = util.promisify(pool.query);
// pool.query soporta async await
module.exports = pool; // exportamos pool para poder usarlo desde cualquier archivo

