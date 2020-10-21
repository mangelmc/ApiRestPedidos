const mongoose = require('mongoose');

mongoose.connect("mongodb://172.18.0.1:27017/ApiRestPedidos", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('conexion a mongodb exitosa');
}).catch(err => {
    console.log('Error en la conexion : ', err);
});
module.exports = mongoose;