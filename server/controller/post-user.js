const {addUser} = require('../use-cases/add-user')
function makePostUser({ addUser }) {
    return async function postUser(httpRequest) {
        try {
            addUser(httpRequest)
            .then(() => {
                return {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    statusCode: 201,
                    body: {
                        message: 'user successfully registered'
                    }
                }
            }) 
        }
        catch(err) {
            console.log(err)
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                body: {
                    error: err.message
                }
            }
        }

    }
}

const postUser = makePostUser({addUser})

module.exports = {
    postUser
}