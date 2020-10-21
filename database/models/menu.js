const mongoose = require('../connect');
const Schema = mongoose.Schema;

const menuSchema = Schema({

    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
        required :'Info del restaurant requerido'
    },
    nombre: {
        type: String,
        required :'Nombre del Menu requerido'
    },
    precio: {
        type: Number,
        required :'Precio del Menu requerido'
    },
    descripcion: {
        type: String,
        required :'Descripcion del Menu requerida'
    },
    fechaRegistro: {
        type: Date,
        default: Date.now()
    },
    foto: String
})
//Nombre, precio, descripción, fechaderegistro, fotografía del producto
const menu = mongoose.model('Menu', menuSchema);

module.exports = menu;