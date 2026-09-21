const Listing = require("../models/Listing");

module.exports.index = async(req,res)=>{
    let allListing = await Listing.find();
    res.render("./listings/index.ejs",{allListing});
};

module.exports.renderNewForm = (req,res)=>{
    res.render("./listings/new.ejs");
};

module.exports.showListing = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path:"reviews",
        populate:{
            path:"author",
        },
        })
        .populate("owner");
    if(!listing){
        req.flash("error","Listing you requested doesnot exists.");
        return res.redirect("/listings");
    }
    // console.log(listing);
    res.render("./listings/show.ejs",{listing});

};

module.exports.editListing = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested doesnot exists.");
        return res.redirect("/listings");
    }
    res.render("./listings/edit.ejs",{listing});
}

module.exports.updateListing = async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,req.body.listing);
    req.flash("success","Listing updated successfully! ")
    res.redirect(`/listings/${id}`);
}
module.exports.destroyListing = async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,req.body.listing);
    req.flash("success","Listing updated successfully! ")
    res.redirect(`/listings/${id}`);
}

module.exports.postListing = async(req,res,next)=>{
    console.log(req.file);
    let url = req.file.path;
    let filename = req.file.filename;
    console.log(url,",",filename);
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id; 
    newlisting.image = {url,filename};
    await newlisting.save();
    req.flash("success","New Listing created! ")
    res.redirect("/listings");
}
