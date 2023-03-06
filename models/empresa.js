const { Schema, model } = require('mongoose');

const EmpresaSchema = Schema({ 
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    tipo: {
        type: String,
        required: [true, 'Tipo de empresa es obligatorio']
    },
    ubicacion: {
        type: String,
        required: false
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    rol: {
        type: String,
        required: true
    },
    sucursales: {
        type: Array
    }
});

module.exports = model('Empresa', EmpresaSchema)