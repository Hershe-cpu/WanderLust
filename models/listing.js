const mongoose = require("mongoose");
const {Schema} = mongoose;
const Review = require("./review");
const User = require("./user");
const { required } = require("joi");

const listingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        filename:{
            type:String,
            default:"listingimage",
        },
        url:{
            type:String,
            default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vmsC8-XjvzVCE-2h0TUOZMZnMbuCx-Cwzk3ErEl-tQ&s",
        set: (v)=>
            v === ""?
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vmsC8-XjvzVCE-2h0TUOZMZnMbuCx-Cwzk3ErEl-tQ&s"
                :v,}
        },   
    price:{
        type:Number,
        required:true
    },
    location: {
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref:"Review",
    }

    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    geometry:{
        type:{
        type:String,
        enum:['Point'],
        required: true,
        },
        coordinates:{
            type:[Number],
            required:true,
        }


    }
});



listingSchema.post("findOneAndDelete",async(data)=>{
    if (data){
    await Review.deleteMany({_id:{$in:data.reviews}});}

});

const Listing = new mongoose.model("Listing",listingSchema);

module.exports = Listing;