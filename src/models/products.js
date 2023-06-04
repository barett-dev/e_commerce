const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const collectionName = 'product';

const productSchema = new mongoose.Schema({
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
});

const Products = mongose.model(collectionName, productSchema.plugin(mongoosePaginate));

module.exports = Products;