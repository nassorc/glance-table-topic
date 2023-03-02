const path = require('path')
const { postUser } = require('./controller/post-user')

module.exports = (app) => {
    app.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'register.html'))
    })
    app.post('/register', async (req, res) => {
        const httpResponse = await postUser(req.body)
        
        
    })
}