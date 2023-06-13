class UserDto {
    constructor(user) {
        this.f_name = user.f_name
        this.l_name = user.l_name
        this.email = user.email
        this.password = user.password
        this.age = user.age
    }
}

class GetUser {
    constructor(user) {
        this.f_name = user.f_name
        this.l_name = user.l_name
        this.email = user.email
        this.age = user.age
    }
}

module.exports = UserDto, GetUser