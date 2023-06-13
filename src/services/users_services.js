const userStore = require("../dao/users.dao");
const bcrypt = require('../utilities/bcrypt')

const get = async () => {
    const users = await userStore.getUsers()
    return users
}

const getOneUser = async ( item ) => {
    const user = await userStore.findUser( item )
}
const usersSort = async ( limit, page ) => {
    const paginate = userStore.usersPaginate( limit, page )
    return paginate 
}
const create = async userInfo => {
    try {        
        const passwordHashed = await bcrypt.hashPassword(userInfo.password.toString())
        userInfo.password = passwordHashed
        console.log(userInfo)
        const newUser = await userStore.createUser(userInfo);

        return newUser
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (id, item) => {
    try {
        const updateItem = await userStore.updateUserDao(id, item)
        return updateItem
    } catch (error) {
    console.log(error)
    }
}

const deleteUser = async (id, item) => {
    try {
        const deleteUser = await userStore.deleteUserDao(id, item) 
        return deleteUser
    } catch {
    }
}

module.exports = {
    create,
    usersSort,
    get,
    getOneUser,
    updateUser,
    deleteUser,
}