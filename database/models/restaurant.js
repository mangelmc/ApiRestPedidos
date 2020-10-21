const mongoose = require('../connect');
const Schema = mongoose.Schema;

let restaurantSchema = Schema({
    nombre: {
        type: String,
        required :'Nombre del restaurant requerido'
    },
    nit: {
        type: String,
        required :'NIT requerido'
    },
    propietario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required :'Info propietario requerido'
    },
    direccion: {
        type: String,
        required :'Direccion requerida'
    },
    telefono: {
        type: String,
        required :'Telefono requerido'
    },

    log: {
        type: Number,
        required :'Log requerido'
    },
    lat: {
        type: Number,
        required :'Lat requerido'
    },
    
    fechaRegistro: {
        type: Date,
        default: Date.now()
    },
    logo: String,
    fotoLugar: String 
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;