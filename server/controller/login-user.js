function makeLoginUser({ authenticateUser }) {
    return async function loginUser(httpRequest) {
        try {
            const token = await authenticateUser(httpRequest)
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 304,
                body: {
                    token
                }
            }
        }
        catch(err) {
            console.log(err)
        }
    }
}

module.exports = makeLoginUser