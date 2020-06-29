const mysql = require("mysql"); // Modulo de MySQL instalado
const util = require("util"); // convertir a notacion ES6 la libreria mysql (async/await);
const pool = mysql.createPool({
  host: process.env.HOST_DB, // host
  port: process.env.PORT_DB, // puerto por default
  user: process.env.USER_DB, // usuario db
  password: process.env.PASSWORD_DB, // password db
  database: process.env.DATABASE,
  connectionLimit: 10, // numero de conexiones concurrentes
}); // referencia de conexion (select -> pool) | (insert -> pool)
pool.query = util.promisify(pool.query);
// pool.query soporta async await
module.exports = pool; // exportamos pool para poder usarlo desde cualquier archivo
