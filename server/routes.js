const path = require('path')
const { postUser } = require('./controller/post-user')

module.exports = (app) => {
    app.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'register.html'))
    })
    app.post('/register', async (req, res) => {
        postUser(req.body)
        .then((httpResponse) => {
            console.log(httpResponse)
            if(httpResponse.headers) {
                res.set(httpResponse.headers)
            }
            res.type('json')
            res.status(httpResponse.statusCode).send(httpResponse.body)
        }) 
    })

    app.get('/login', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'login.html'))
    })
    app.post('/login', (req, res) => {
        console.log(req.body)
    })
}