const {makeUser} = require('../models/user')

function makeAddUser(glanceDb) {
    return async function addUser(userInfo) {
        const user = makeUser(userInfo)

        return glanceDb.insert({
            email: user.getEmail(),
            password: user.getPassword()
        })
    }
}


module.exports = makeAddUser