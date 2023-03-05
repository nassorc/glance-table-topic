function makePostUser({ addUser }) {
    return async function postUser(httpRequest) {
        try {
            const posted = await addUser(httpRequest)

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: {
                    details: posted,
                    message: 'user successfully registered'
                }
            }

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

module.exports = makePostUser