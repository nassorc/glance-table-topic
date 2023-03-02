function buildMakeUser({} = {}) {
    return function makeUser({
        email,
        password,
        deck = {},
    }) {
        if(!email) {
            throw new Error('User must have an email')
        }
        if(!password) {
            throw new Error('User must have a password')
        }
        if(password.length < 8) {
            throw new Error('User password must be greater or equal to 8')
        }
        return Object.freeze({
            getEmail: () => email,
            getPassword: () => password,
            getDeck: () => deck
        })
    }
}

const makeUser = buildMakeUser({})
module.exports = {
    makeUser
}