const mongoose = require('mongoose')
const { Schema } = mongoose;

const PostSchema = new Schema({
    username:{
        type: String, 
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: false,
    },
    photo: {
        type: String,
        required: false,
        default: ""
    },
    categories: {
        type: Array,
        required: false,
    }

}, { timestamps: true })

module.exports = mongoose.model('Post', PostSchema)