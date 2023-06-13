const mongoose= require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const collectionName = 'user';

const userSchema = new mongoose.Schema ({ 
    f_name:{
        type : String,
        required : [true, 'El nombre es necesario'],
    },
    l_name:{
        type : String,
        required : [true, 'El apellido es necesario'],
    },
    password:{
        type : String,
        required : [true, 'La contraseña es obligatoria'],
        unique : true,
    },
    email:{
        type : String,
        required : [true, 'El correo electronico es necesario'],
        unique : true,
    },
    age:{
        type : Number,
        required : [true, 'Ingrese la edad'],
        unique : true,
    },

})

const User = mongoose.model(collectionName, userSchema.plugin(mongoosePaginate));

module.exports = User
