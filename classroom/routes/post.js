const express = require("express");
const router = express.Router();




// Posts
// Index Route-posts
router.get("",(req,res)=>{
    res.send("Get for Post")
})

// Show ROute-posts
router.get("/:id",(req,res)=>{
    res.send("Get for Post id");
    
})

// Create Route-posts
router.post("/:id",(req,res)=>{
    res.send("Post for Post")
})

// Delete Route-posts
router.delete("/:id",(req,res)=>{
    res.send("Delete for post")
})

module.exports = router;