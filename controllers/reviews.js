const Review = require("../models/review");
const Listing = require("../models/Listing");

module.exports.newReview = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    const newreview = new Review(req.body.review);
    newreview.author = req.user._id;
    listing.reviews.push(newreview);
    await newreview.save();
    await listing.save();
    // console.log(newreview);
    req.flash("success","Review added successfully! ")
    res.redirect(`/listings/${listing._id}`);
}

module.exports.destroyReview = async(req,res)=>{
    let {id,review_id} = req.params;
    await Review.findByIdAndDelete(review_id);
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:review_id}});
    req.flash("success","Review deleted successfully! ")
    res.redirect(`/listings/${id}`);

}