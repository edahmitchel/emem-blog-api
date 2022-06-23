const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema ({
    article:String,
    title:String,
    banner:String,
    likes:Number
})

const Posts = mongoose.model('postss', postSchema);
module.exports = {Posts, mongoose}