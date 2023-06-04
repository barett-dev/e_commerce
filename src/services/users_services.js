const userStore = require("../store/users.store");

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
    const passwordHashed = hashPassword(userInfo.password)
    const newUserInfo = {
        f_name,
        l_name,
        email,
        password: passwordHashed,
    };

    const newUser = await userStore.createUser(newUserInfo);

    return newUser
}

module.exports = {
    create,
    usersSort,
    get,
    getOneUser,
}