const pool = require('../utils/bd'); // importamos la referencia de la conexion
getProducts = async () => {
    try {
        // consultas
        const query = "SELECT id,nombre,descripcion,precio,imagen FROM producto";
        const rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts
}