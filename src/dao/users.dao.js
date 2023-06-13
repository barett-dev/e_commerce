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
    const user = new Users(userInfo)
    await user.save()
    return user
}

const updateUserDao = async (id, item) => {
    await Users.findByIdAndUpdate(id, item)
    const userUpdated = await Users.findById(id)
    return userUpdated
}
const deleteUserDao = async item => {
    await Users.findByIdAndDelete(item)
}

module.exports = {
    getUsers,
    findUser,
    createUser,
    usersPaginate,
    updateUserDao,
    deleteUserDao,
}
