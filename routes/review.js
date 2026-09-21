const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn, isReviewAuthor,validateReview} = require("../middleware.js")
const reviewController = require("../controllers/reviews.js")

// Post
router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.newReview));

// Delete Reviews
router.delete("/:review_id",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview));

module.exports = router;