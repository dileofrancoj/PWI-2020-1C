const pool = require("../utils/bd"); // importamos la referencia de la conexion
getProducts = async () => {
  try {
    // consultas
    const query =
      "SELECT producto.id, producto.nombre, producto.descripcion,producto.precio,producto.imagen,categoria_principal.nombre as nombre_categoria  FROM ?? JOIN ?? ON producto.id_categoria = categoria_principal.id where estado = 1 order by id desc";
    const rows = await pool.query(query, [
      process.env.TABLA_PRODUCTO,
      process.env.TABLA_CATEGORIAS,
    ]);
    // SELECT p.id, p.nombre, p.descripcion, p.precio, p.imagen , c.nombre, c.descripcion from producto  as p join categoria_principal as c on p.id_categoria = c.id
    return rows;
  } catch (error) {
    console.log(error);
  }
};

getProduct = async (id) => {
  try {
    const query =
      "SELECT id, nombre, descripcion ,precio , imagen FROM ??  WHERE id = ?";
    const params = [process.env.TABLA_PRODUCTO, "puntuacion", id];
    const rows = await pool.query(query, params);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const update = async (id, obj) => {
  console.log("Se actualizara el id : ", id);
  console.log(obj);
  const query = "UPDATE ?? SET ? where id = ?";
  const params = [process.env.TABLA_PRODUCTO, obj, id];
  return await pool.query(query, params);
};

const create = async (obj) => {
  // SET -> Se usa cuando se envia un objeto como parametro (campos) values()
  const query = "INSERT INTO ?? SET ?";
  // obj debe tener como propiedades del objeto los campos de la tabla
  const params = [process.env.TABLA_PRODUCTO, obj];
  const rows = await pool.query(query, params);
  return rows.insertId; // insertId -> id del ultimo elemento creado
};
module.exports = {
  getProducts,
  getProduct,
  create,
  update,
};
