router = require("express").Router()




const {
    allPosts,
    getSinglePost,deletePost,newPost,updatePost,likePost
  
} = require("../controller/posts")


router.get("/:id", getSinglePost)
router.get("/",allPosts )
router.post("/",newPost)
router.delete("/:id",deletePost)
router.get("like/:id", likePost)
// put is to update
router.put("/:id",updatePost)
// router.update("/",router);


module.exports = router
