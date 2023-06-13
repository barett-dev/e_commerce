const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect('mongodb+srv://node_app:esnifar123@cluster0.lk6jlga.mongodb.net/test', {
        });
        console.log('Database online')
    } catch (error) {
        throw new Error('Database connection error')
    }

}

module.exports = {
    dbConnection
}