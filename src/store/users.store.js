const Users = require('../models/users')

const getUsers = async () => {
    return await Users.find()
} 

const usersPaginate = async ( limit, page ) => {
    return await Users.paginate({}, { limit, page })
}

const findUser = async item => {
    return await Users.findOne({ item })
}

const createUser = async userInfo => {
    return await Users.creare(userInfo)
}

module.exports = {
    getUsers,
    findUser,
    createUser,
    usersPaginate
}
