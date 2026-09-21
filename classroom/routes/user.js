const express = require("express");
const router = express.Router();


// Index Route-Users
router.get("/",(req,res)=>{
    res.send("Get for Users");
})

// Show ROute-Users
router.get("/:id",(req,res)=>{
    res.send("Get for users id");
    
})

// Create Route-Users
router.post("",(req,res)=>{
    res.send("Post for users");
})

// Delete Route-Users
router.delete("/:id",(req,res)=>{
    res.send("Delete for Users");
})


module.exports = router;