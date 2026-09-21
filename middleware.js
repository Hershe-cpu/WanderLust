const {listingSchema,reviewSchema} = require("./schema.js");
const ExpressError = require("./utils/ExpressError");
const Listing = require("./models/Listing");
const Review = require("./models/review.js");
module.exports.isLoggedIn = (req,res,next)=>{
    
    if(!req.isAuthenticated()){
        //redirect url
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","Log In is required");
        return res.redirect("/login");
    }
    next();
}
module.exports.saveRedirectUrl = (req,res,next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}
module.exports.isOwner = async(req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner["_id"].equals(res.locals.currUser._id) ){
        req.flash("error","You dont have permission.");
        return res.redirect(`/listings/${id}`);

    }
    next();
};
module.exports.validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);

    if (error){
        let errMsg = error.details.map((ele)=>ele.message).join(",");
        next( new  ExpressError(400,errMsg));
    }else {
        next();
    }
};

module.exports.validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);

    if (error){
        let errmsg = error.details.map((ele)=>ele.message).join(",");
        
        return next (new ExpressError(400,errmsg));
    }
    next();
    
};
module.exports.isReviewAuthor = async(req,res,next)=>{
    let {id,review_id} = req.params;
    let review = await Review.findById(review_id);
    console.log(review);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You dont have permission.");
        return res.redirect(`/listings/${id}`);

    }
    next();

}