const path = require('path')
const { postUser, loginUser } = require('./controller')

const jwt = require('jsonwebtoken')
const authenticateUser = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.cookies.token, process.env.SECRET_KEY)
        req.userId = decoded._id
        next()
    } catch(err) {
        console.log(err)
        res.status(403).json({message: "invalid token"})
    }
}

module.exports = (app) => {
    app.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'register.html'))
    })
    app.post('/register', async (req, res) => {
        postUser(req.body)
        .then((httpResponse) => {
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
    app.post('/login', async (req, res) => {
        try {
            const httpResponse = await loginUser(req.body)
            if(httpResponse.headers) {
                res.set(httpResponse.headers)
            }
            if(httpResponse.body.token) {
                res.cookie('token', httpResponse.body.token)
            }
            res.setHeader('Location', '/dashboard')
            res.type('json')
            res.sendStatus(httpResponse.statusCode)

        }
        catch(err) {
            console.log(err)
        }
    
    })

    app.get('/dashboard', authenticateUser, (req, res) => {
        console.log(req.userId)
        res.sendFile(path.join(__dirname, 'views', 'dashboard.html'))
    })
}