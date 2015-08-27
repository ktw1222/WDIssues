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
var DB = require("./config/connection")
var User = DB.models.User;

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
    clientID: env.clientID,
    clientSecret: env.clientSecret,
    callbackURL: env.callbackURL
  },
  function(accessToken, refreshToken, aProfile, done) {
    token = accessToken;
    tokenSecret = refreshToken;
    profile = aProfile;

    User.findOrCreate({where: {
      githubId: profile.id,
      username: profile.displayName
    }})
    .then(function(user){
      return done(null, user);
    })
   // asynchronous verification, for effect...
  //  process.nextTick(function () {
  //    return done(null, profile);
  //  });
 }
));
//app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: false}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())

var postsController = require("./app/controllers/posts");
var commentsController = require("./app/controllers/comments");
var usersController = require("./app/controllers/users");

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
app.use("/", usersController);

app.get('/auth/github',
  passport.authenticate('github'),
  function(req, res){});

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    req.session.token = token;
    req.session.tokenSecret = tokenSecret;
    req.session.profile = profile;
    res.redirect('/');
  });

  app.get('/currentUserData', function(req, res) {
    console.log(req.user);
    if (req.user === undefined) {
        // The user is not logged in
        res.json({ });
    } else {
        res.json( req.user );
    }
});


app.get('/signout', function(req, res){
  console.log(req.user);
  req.session.destroy();
  console.log(req.user);
  res.redirect("/");
})

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log("Listening on port", app.get('port'));
});
