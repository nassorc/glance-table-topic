const {makeUser} = require('../models/user')
const db = require('../config/db')

function makeAddUser(glanceDb) {
    return async function addUser(userInfo) {
        const user = makeUser(userInfo)

        return glanceDb.insert({
            email: user.getEmail(),
            password: user.getPassword()
        })
    }
}

const addUser = makeAddUser(db)

module.exports = {
    addUser
}