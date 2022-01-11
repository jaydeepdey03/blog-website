const jwt = require('jsonwebtoken')
require('dotenv').config()
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const fetchUser = (req, res, next)=>{
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send("Access Denied")
    }
    try {
        const data = jwt.verify(token, JWT_SECRET_KEY)
        req.user = data.user
        next()
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}

module.exports = fetchUser