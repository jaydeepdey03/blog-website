const express = require('express')
const router = express.Router()
const Post = require('../Models/Post')
const fetchUser = require('../Middleware/loggedUser')

// Create Post: Login Required
router.post('/create', fetchUser, async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

// Update Post: Login Required

router.put('/updatePost/:id', fetchUser, async (req, res) => {

    const { title, desc, photo, categories } = req.body

    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                const newPost = {}
                if (title) newPost.title = title
                if (desc) newPost.desc = desc
                if (photo) newPost.photo = photo
                if (categories) newPost.categories = categories

                let post = await Post.findById(req.params.id)
                if (!post) {
                    return res.status(404).send("Not Found")
                }

                post = await Post.findByIdAndUpdate(req.params.id, { $set: newPost }, { new: true })

                res.status(200).json(post)

            } catch (error) {
                res.status(404).send("Error")
            }
        }
        else {
            res.status(401).send("Access denied")
        }
    } catch (error) {
        res.status(500).send("Server Error")
    }
})

// Delete Post : Login Required

router.delete('/delete/:id', fetchUser, async (req, res) => {
    let post = await Post.findById(req.params.id)
    if (post.username === req.body.username) {
        try {
            await post.delete()
            res.status(200).send("Deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(401).send("Access Denied")
    }
})

// Fetch Post by Id: Login required

router.get('/fetchPost/:id', fetchUser, async (req, res) => {
    let post = await Post.findById(req.params.id)
    if (post.username === req.body.username) {
        try {
            const fetchedPost = await Post.findById(req.params.id)
            res.status(200).json(fetchedPost)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(401).send("Access Denied")
    }

})

// Fetch Post based on Category or username: Login required

router.get('/fetchPost', fetchUser, async (req, res) => {

    const username = req.query.user
    const catName = req.query.cat

    try {
        let posts;
        if (username) {
            posts = await Post.find({ username })
        }
        else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName],
                }
            })
        }
        else {
            posts = await Post.find()
        }
        res.status(200).json(posts)
    }
    catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router;