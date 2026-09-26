if (process.env.NODE_ENV!="production"){
    require('dotenv').config();
}




const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
let app = express();
const path = require("path");
const port = 8080; 
const session = require("express-session");
const flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError")
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js")
const userRouter = require("./routes/user.js")
const User = require("./models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}
main()
.then((res)=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log(err)
})
const sessionOptions = {secret:"mysupersecretcode",
                        resave:false,
                        saveUninitialized:true,
                        cookie:{
                            expires:Date.now() +7*24*60*60*1000,
                            maxAge:1000*60*60*24*3,
                            httpOnly:true,
                        },
                    };
app.use(session(sessionOptions));
app.use(flash());

// Authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Home Route
app.get("/",(req,res)=>{
    res.send("home");
});

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser = req.user;
    next();
})

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);


// Catch-all for 404
app.all(/(.*)/,(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found"));
});

// Robust Error HAndler
app.use((err,req,res,next)=>{
    let statusCode = Number.isInteger(err.statusCode) ? err.statusCode:500;
    let {message="Internal Server Error"}  = err;
    res.status(statusCode).render("error.ejs",{message}); 
});

app.listen(port,(res)=>{
    console.log("Listening to the port",port);
});


