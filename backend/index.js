const express = require('express')
const connectToMongo = require('./db')
const cors = require('cors')
const multer = require('multer')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT

app.use(cors())

connectToMongo()

app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

app.use('/blog/auth', require('./Routes/auth'))
app.use('/blog/users', require('./Routes/user'))
app.use('/blog/posts', require('./Routes/posts'))
app.use('/blog/category', require('./Routes/category'))

const upload = multer({ storage: storage })

app.post('/blog/upload', upload.single('file'), (req, res)=>{
    res.status(200).send("Uploaded Successfully") 
})

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})