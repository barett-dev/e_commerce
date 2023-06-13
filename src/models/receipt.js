const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const collectionName = 'receipt';

const receiptSchema = new mongoose.Schema({
    code: String,
    purchase_date: String,
    amaunt: Number,
    user_email: String,

})

const Receipt = mongoose.model( collectionName, receiptSchema.plugin(mongoosePaginate));

module.exports = Receipt;