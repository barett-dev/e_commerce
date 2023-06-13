const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
   try {
    const newPassword = await bcrypt.hash(password, 10)
    return newPassword
   } catch (error) {
    console.log(error)
   }
}

module.exports = {
    hashPassword
}


