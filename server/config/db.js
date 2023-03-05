const { MongoClient } = require('mongodb')
// uri is a set of instructions that the driver uses to connecto to a db deployment
const uri = process.env.DB_URL || 'mongodb://127.0.0.1:27017'
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


