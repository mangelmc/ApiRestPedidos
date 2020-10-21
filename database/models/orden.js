const mongoose = require('../connect');
const Schema = mongoose.Schema;

const ordenSchema = Schema({

    cliente: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: 'Info Cliente requerida'
    },
    lugarEnvioLat: {
        type: Number,
        required: 'Info Ubicacion requerida'
    },
    lugarEnvioLat: {
        type: Number,
        required: 'Info Ubicacion requerida'
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
        required: 'Info Restaurant requerida'
    },
    menus: [{
        type: Schema.Types.ObjectId,
        ref: "Menu",
        required: 'Info Menu requerida'
    }],
    cantidad: [{
        type: Number,
        required: 'Cantidad requerida'
    }],
    fechaRegistro: {
        type: Date,
        default: Date.now()
    },
    pagoTotal:{ 
        type: Number,
        required: 'Pago total requerido'
    }

})

const Orden = mongoose.model('Orden', ordenSchema);

module.exports = Orden;