const pool = require('./../utils/bd');

getCategories = async () => {
    try {
        const query = "select id,nombre,descripcion from categoria_principal order by id desc LIMIT 5 ";
        const rows = await pool.query(query);
        return rows;
    } catch ( error ){
        console.log(error)
    }
}
module.exports = {
    getCategories
}