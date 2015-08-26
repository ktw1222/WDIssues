//initialize app
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session")
var env = require("./env")

// Load Passport and Github Strategy
var passport = require("passport")
var GitHubStrategy = require("passport-github").Strategy

passport.serializeUser(function(user, done) {
  done(null, user)
})
passport.deserializeUser(function(obj, done) {
  done(null, obj)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure Passport
passport.use(new GitHubStrategy({
    clientID: env.consumerKey,
    clientSecret: env.consumerSecret,
    callbackURL: env.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
   // asynchronous verification, for effect...
   process.nextTick(function () {
     return done(null, profile);
   });
 }
));

app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize())
app.use(passport.session())

var postsController = require("./app/controllers/posts");
var commentsController = require("./app/controllers/comments");

// serve public assets
app.use(express.static("public"));

//load html file
app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

app.get('/test', function(req, res){
  res.send( req.user );
});

// Routes
app.use("/", postsController);
app.use("/", commentsController);

app.get('/auth/github',
  passport.authenticate('github'),
  function(req, res){});

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/test');
  });

// The process.env.PORT is for deployment to Heroku. Don't worry about it! You can have the usual:
/*
app.listen(3000, function(){
*/

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log("Listening on port", app.get('port'));
});
