const pool = require("../utils/bd"); // importamos la referencia de la conexion
getProducts = async () => {
  try {
    // consultas
    const query = "SELECT id,nombre,descripcion,precio,imagen FROM ??";
    const rows = await pool.query(query, [process.env.TABLA_PRODUCTO]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

getProduct = async (id) => {
  try {
    const query =
      "SELECT id, nombre, descripcion ,precio , imagen FROM ?? where id = ?";
    const params = [process.env.TABLA_PRODUCTO, id];
    const rows = await pool.query(query, params);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getProducts,
  getProduct,
};
