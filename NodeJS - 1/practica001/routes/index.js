var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
  // req -> request (todo lo que llega a la página) -> formularios de contacto, informacion en las rutas, variables de sesion, contenido multimedia. Información que el usuario envia al servidor
  
  // res -> response (informacion que el servidor envia al cliente)
  res.render('index',{nombre : 'Franco'});
});

module.exports = router;
