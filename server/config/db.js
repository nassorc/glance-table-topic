const { MongoClient } = require('mongodb')
// uri is a set of instructions that the driver uses to connecto to a db deployment
const uri = process.env.DB_URL || 'mongodb://localhost:27017'
const dbName= process.env.DB_NAME || 'glance'
const client = new MongoClient(`${uri}/${dbName}`)

async function makeDb() {
    if(!client) {
        await client.connect()
    }
    return client.db()
}

const makeGlanceDb = require('./glance-db.js')
const glanceDb = makeGlanceDb({ makeDb })

module.exports = glanceDb

// const user = {
//     email: "toe@gmail.com",
//     password: "smellytoe"
// }
// glanceDb.insert(user)



