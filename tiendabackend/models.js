const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Articulo = mongoose.model('Articulo',
  new mongoose.Schema({ nombre: String, precio: Number })
);

const Arma = mongoose.model('Arma',
  new mongoose.Schema({ nombre: String, precio: Number })
);

const Tirador = mongoose.model('Tirador',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

module.exports = {
  Cliente: Cliente,
  Articulo: Articulo,
  Arma: Arma,
  Tirador: Tirador
}


// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Articulo
// }
