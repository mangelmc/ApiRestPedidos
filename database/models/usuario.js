const mongoose = require('../connect');
const Schema = mongoose.Schema;

const usuarioSchema = Schema({
    nombre: {
        type: String,
        required: 'Nombre de usuario requerido'
    },
    ci: {
        type: String,
        required: 'CI requerido'
    },
    email: {
        type: String,
        required: 'Email requerido',
        match: /^(([^<>()\[\]\.,;:\s @\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    },
    password: {
        type: String,
        required: 'Contraseña requerida'
    },

    telefono: {
        type: Number,
        required: 'Numero de telefono requerido'
    },
    log: {
        type: Number,
        required: 'Info Ubicacion requerida'
    },
    lat: {
        type: Number,
        required: 'Info Ubicacion requerida'
    },
    fechaRegistro: {
        type: Date,
        default: Date.now()
    },
    avatar: String,
    rol: {
        type: String,
        required: 'Info rol de usuario requerida'
    } // cliente, dueño,cocinero
});

const usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = usuario;