const pool = require("./../db");

const list = async () => {
  const query = "select * from ??";
  const params = [process.env.TABLA_USUARIO];
  return await pool.query(query, params);
};

module.exports = { list };
