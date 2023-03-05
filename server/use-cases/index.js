const db = require('../config/db')
const jwt = require('jsonwebtoken')
const makeAddUser = require('./add-user')
const makeAuthenticateUser = require('./authenticate-user')

const addUser = makeAddUser(db)
const authenticateUser = makeAuthenticateUser({glanceDb: db, jwt})

module.exports = {
    addUser,
    authenticateUser
}