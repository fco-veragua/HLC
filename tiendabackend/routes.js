// const cors       = require('cors')
// const express    = require("express");
// const controller = require("./controllers.js");


// const router = express.Router();


// // --------------- API REST CRUD

// router.get    ("/clientes",      cors(), controller.readClientes);   // Read All
// router.get    ("/clientes/:id",  cors(), controller.readCliente);    // Read
// router.delete ("/clientes/:id",  cors(), controller.deleteCliente);  // Delete
// router.put    ("/clientes/:id",  cors(), controller.updateCliente);  // Update
// router.post   ("/clientes",      cors(), controller.createCliente);  // Create

// router.get    ("/articulos",     cors(), controller.readArticulos);  // Read All
// router.get    ("/articulos/:id", cors(), controller.readArticulo);   // Read
// router.delete ("/articulos/:id", cors(), controller.deleteArticulo); // Delete
// router.put    ("/articulos/:id", cors(), controller.updateArticulo); // Update
// router.post   ("/articulos",     cors(), controller.createArticulo); // Create


// module.exports = router;

const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD // - armas y armaduras

router.get    ("/armas",      cors(), controller.readArmas);   // Read All
router.get    ("/armas/:id",  cors(), controller.readArma);    // Read
router.delete ("/armas/:id",  cors(), controller.deleteArma);  // Delete
router.put    ("/armas/:id",  cors(), controller.updateArma);  // Update
router.post   ("/armas",      cors(), controller.createArma);  // Create

router.get    ("/tiradores",     cors(), controller.readTiradores);  // Read All
router.get    ("/tiradores/:id", cors(), controller.readTirador);   // Read
router.delete ("/tiradores/:id", cors(), controller.deleteTirador); // Delete
router.put    ("/tiradores/:id", cors(), controller.updateTirador); // Update
router.post   ("/tiradores",     cors(), controller.createTirador); // Create


module.exports = router;
