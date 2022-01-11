const express = require('express')
const Category = require('../Models/Category')
const router = express.Router()

router.post('/create', async(req, res)=>{
    try {
        const cat = await Category.create(req.body)
        res.status(200).json(cat)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/getCat', async(req, res)=>{
    try {
        const cats = await Category.find()
        res.status(200).json(cats)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;