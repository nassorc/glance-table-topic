const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 3000

require('./routes.js')(app)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})