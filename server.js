const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
//const port = process.env.port || 3000;

var app = express();

/*
// HBS
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear",()=>{

    return new Date().getFullYear();
});

hbs.registerHelper("ToUpperCase",(text)=>{
 
    return text.toUpperCase();

});

app.set("view engine","hbs");

// Middle ware
app.use(express.static(__dirname + "/public"));
app.use((req,res,next)=>{

    var date = new Date().toDateString();
    var log =  "Application run at :" + date + " Method :" + req.method +  " Path : " + req.path

    fs.appendFile('server.log',log + "\n" , (err)=>{
      if(err){
          console.log("Can not log");
      }

    });

    console.log(log);
    next();
});


app.get("/",(req,res)=>{

    res.render("home.hbs",
    {pageTitle:"Home page"}
);
   // res.send({status:"OK",message:"No results"});
});

app.get("/about",(req,res)=>{

    res.render("about.hbs",{pageTitle:"About page"});
   // res.send({status:"OK",message:"About page"});

});




app.get("/bad",(req,res)=>{

    res.send({status:"Failed",message:"Can not find the page"});

});
*/



app.get("/test",(req,res)=>{

    res.send({status:"OK",message:"test"});
 
 });

app.listen(3000,()=>{

    console.log("server start on port 3000");

});