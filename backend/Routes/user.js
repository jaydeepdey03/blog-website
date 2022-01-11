const express = require('express')
const router = express.Router()
const Post = require('../Models/Post')
const User = require('../Models/User')
const bcrypt = require('bcrypt')
const { body, validationResult } = require('express-validator');

// Update User
router.put('/update/:id',
    body('username').isLength({ min: 4 }),
    body('email').isEmail(),
    body('password').isLength({ min: 3 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        if (req.body.userID === req.params.id) {
            if (req.body.password) {
                const salt = bcrypt.genSaltSync(10);
                req.body.password = bcrypt.hashSync(req.body.password, salt);
            }
            try {
                const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
                res.status(200).json(updatedUser)
            } catch (error) {
                res.status(500).json(error)
            }
        }
        else {
            res.status(401).send("Access Denied")
        }
    })

// Delete User

router.delete('/delete/:id',
    async (req, res) => {
        if (req.body.userID === req.params.id) {
            try {
                const user = await User.findById(req.params.id)
                try {
                    await Post.deleteMany({ username: user.username })
                    await User.findByIdAndDelete(req.params.id)
                    res.status(200).send("Found and Deleted")
                } catch (error) {
                    res.status(500).json(error)
                }

            } catch (error) {
                res.status(404).json(error)
            }

        }
        else {
            res.status(401).send("Access Denied")
        }
    })

    // Read User

    router.get('/getUser/:id',
    async (req, res) => {
        if (req.body.userID === req.params.id) {
            try {
                const getUser = await User.findById(req.params.id)
                res.status(200).json(getUser)
            } catch (error) {
                res.status(500).json(error)
            }
        }
        else {
            res.status(401).send("Access Denied")
        }
    })

module.exports = router;