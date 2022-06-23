const {Posts} = require('../model/postschema')



const allPosts = async (req, res) => {
    try {
      const posts = await Posts.find();
      res.status(200).json(posts);
      console.log("All posts");
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  const getSinglePost = async (req, res) => {
    try {
      if (req.params.id) {
        const { id } = req.params;
        const post = await Posts.findById(id);
        post ? res.status(200).json(post) : res.send("no post");
        console.log("single");
      } else res.json("no id found");
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  };
  const newPost = async (req, res) => {
    console.log(req.body);
    try {
      const {article,
        title,
        banner,
        likes} = req.body;
      const newpost = new Posts({
        article,
    title,
    banner,
    likes
      });
      await newpost.save();
      res.status(201).json(newpost);
      console.log("new post has been made");
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };
  const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    try {
      const updatedpost = await Posts.findByIdAndUpdate(_id, post, { new: true });
      res.status(200).json(updatedpost);
      console.log("updated post");
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };
  const deletePost = async (req, res) => {
    const { id: _id } = req.params;
    try {
      const deletedpost = await Posts.findByIdAndRemove(_id);
      res.status(200).json(deletedpost);
      console.log("deleted post");
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };
  const likePost = async (req, res) => {
    const { id: _id } = req.params;
    try {
      const likedpost = await Posts.findById(id);
      likedpost ?likedpost = likedpost++ : res.send("no post");
      const updatedpost = await Posts.findByIdAndUpdate(_id, likePost, { new: true });
      res.status(200).json(updatedpost);
    
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };




  
  module.exports = {
    allPosts,
    getSinglePost,
    deletePost,
    newPost,
    updatePost,
    likePost
  };
  