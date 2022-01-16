const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

// Registration of User: POST /register, login not required
router.post('/register',
    body('username').isLength({ min: 4 }),
    body('email').isEmail(),
    body('password').isLength({ min: 3 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let user = await User.findOne({
                username: req.body.username,
            })

            if (user) {
                return res.json({ error: "Sorry User Already Exist" })
            }

            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(req.body.password, salt);

            user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: hashPassword
            })
            console.log(user)

            const userData = { user: user._id }

            const authToken = jwt.sign(userData, JWT_SECRET_KEY)

            console.log(`\n jwtauthToken: ${authToken}`)
            res.status(200).json({ jwtauthToken: authToken })
        }
        catch (err) {
            console.error(err)
            res.status(500).send('Some Error Occured')
        }
    })

// Login

router.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 3 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body
        try {
            const user = await User.findOne({ email })
            console.log(user)
            if (!user) {
                return res.status(404).json({ error: "Not found" })
            }

            const passwordCompare = bcrypt.compareSync(password, user.password)
            if (!passwordCompare) {
                return res.status(401).json({ error: "Invalid Password" })
            }

            const userData = { user: user._id }

            const authToken = jwt.sign(userData, JWT_SECRET_KEY)

            console.log(`jwtauthToken: ${authToken}`)
            res.status(200).json({ jwtauthToken: authToken })


        } catch (error) {
            console.error(error)
            res.status(500).send("Server Error")
        }
    })



module.exports = router