function makeGlanceDb({ makeDb }) {
    return Object.freeze({
        insert,
        findByEmail
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
    async function findByEmail({email}) {
        try {
            const db = await makeDb()
            return await db.collection('users')
                .findOne({email: email})
        }
        catch (err) {
            throw new Error(err)
        }
        
    }
}

module.exports = makeGlanceDb