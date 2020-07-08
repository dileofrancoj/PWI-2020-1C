const mysql = require("mysql");
const util = require("util");
let pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.query = util.promisify(pool.query);
module.exports = pool;
