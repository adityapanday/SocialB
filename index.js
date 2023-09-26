const express = require ('express');
const cookieparser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
//exp serrion is for encryption samje pandey ji.....
const session = require('express-session');
const passport = require('passport');
//aditya change local to google auth at deployment 
const passportLocal = require('./config/passport-local-strategy');

// const path = require('path');

app.use(cookieparser());

//form data ka lia 
app.use(express.urlencoded());


// Static files ka lia
app.use(express.static('./assets'));

app.use(expressLayouts);

//setup Static files to be accesed at diff places in views
app.set('layout extractStyles' , true); 
app.set('layout extractScripts', true)
 

 //setup of view engine
app.set('view engine' , 'ejs');
// app.use('views' , path.join(__dirname , 'views'));
app.set('views' , 'views');

app.use(session({
   name: 'connect',
   // TODO change the secret before deployment in production mode
   //adiya is the key to encrypt the cookie
   secret: 'aditya',
   saveUninitialized: false,
   resave: false,
   cookie: {
      //what is age of cookie to expire the session ya mili second ma hota hai 
       maxAge: (1000 * 60 * 100)
   }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);





 app.use('/' , require('./routes'));
 


app.listen( port, ()=>{
   console.log("server is running on port no" , port);
});
 
