import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: {
    type: String,
    requied: true
  },
  prompt: {
    type: String,
    requied: true
  },
  photo: {
    type: String,
    requied: true
  },
}, {timestamps: true})

const Post = mongoose.model("Post", postSchema)

export default Post