
const {addUser, authenticateUser} = require('../use-cases')

const makePostUser = require('./post-user')
const makeLoginUser = require('./login-user')

const postUser = makePostUser({addUser})
const loginUser = makeLoginUser({authenticateUser})

module.exports = {
    postUser,
    loginUser
}