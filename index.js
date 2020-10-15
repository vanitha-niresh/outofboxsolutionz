var express = require('express');
var nodemailer = require('nodemailer');
var flash = require('connect-flash');
// To use flash below two (cookie parser and express session) are required
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();


var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
  
app.use(cookieParser('Swetha'))
app.use(session({
  secret: "Some random text",
  resave: true,
  saveUninitialized: true
}));
app.use(flash());


app.use(function(req,res,next){
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});


app.get("/",function(req,res){
	res.render("home.ejs");
});

app.get("/service",function(req,res){
	res.render("service.ejs");
});

app.get("/about",function(req,res){
	res.render("about.ejs");
});

app.get("/contact",function(req,res){
	res.render("contact.ejs");
});

app.get("/ripple",function(req,res){
  res.render("ripple.ejs");
});

app.get("/happybirthday",function(req,res){
  res.render("birthday.ejs");
});
app.post('/send', function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var enquiry = req.body.enquiry;

  req.body.name = null;
  var emailMessage = `Hi outofboxsolutionz,\n\n ${name} Contacted you for working with you. Below are the details \n\n Email id: ${email}.\n\n Enquiry: ${enquiry}\n.`;

  console.log(emailMessage);
  // res.send("your mail is sent successfullly");

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'outofboxsolutionz@gmail.com',
      pass: 'Ahtinav5@94'
    }
  });

  var emailOptions = {
    from: 'outofboxsolutionz@gmail.com',
    to: 'outofboxsolutionz@gmail.com',
    subject: 'Node Mailer Test',
    text: emailMessage
  };

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err);
      req.flash("error","Sorry for the inconvenience, we couldnt send your mail. Try again later.");
      res.redirect("/contact");
      
    } else {
      console.log('Message Sent: ' + info.response);
      console.log('Email Message: ' + emailMessage);
      // res.send("your mail is sent successfullly");
      req.flash("success","Your mail is sent successfullly.");
      res.redirect("/contact");
    }
  });
});

var port = process.env.PORT || 3000;
app.listen( port ,function(){
  console.log("Server is up and running");
})
