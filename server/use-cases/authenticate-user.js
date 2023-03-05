function makeAuthenticateUser({glanceDb, jwt}) {
    return async function authenticateUser(userInfo) {
        const {_id, email, password} = await glanceDb.findByEmail(userInfo);
        let token;
        if(_id && email && password) {
            token = jwt.sign({_id, email, password}, process.env.SECRET_KEY)
        }
        return token
    }
}

module.exports = makeAuthenticateUser