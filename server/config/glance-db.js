function makeGlanceDb({ makeDb }) {
    return Object.freeze({
        insert
    })
    async function insert({...userInfo}) {
        const {email, password} = userInfo
        try {
            const db = await makeDb()
            return await db
                .collection('users')
                .insertOne({
                    email,
                    password
                })
            
        }
        catch(err) {
            throw new Error(err)
        }
    } 
}

module.exports = makeGlanceDb