const mongoose = require('mongoose');
const collectionName = 'cart';

const cartSchema = new mongoose.Schema({
    title:{
        type : String,
        required : [true, 'El titulo es obligatorio']
    },
    description:{
        type : String,
        required : [true, 'La descripcion es obligatoria']
    },
    code:{
        type : String,
        required : [true, 'El codigo es obligatorio'],
        unique : true
    },
    price:{
        type : String,
        required : [true, 'El precio es obligatorio']
    },
    status:{
        type : Boolean,
        default : true
    },
    stock:{
        type : String,
        required : [true, 'Ingrese la cantidad disponible']
    },
    category:{
        type : String,
        required : [true, 'Ingrese la categoria']
    },

})

const Cart = mongoose.model( collectionName, cartSchema);

module.exports = Cart;