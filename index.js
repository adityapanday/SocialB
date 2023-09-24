// const express = require ('express');
// const cookieparser = require('cookie-parser');

// const app = express();
// app.use(cookieparser());
// const port = 8000;
// const expressLayouts = require('express-ejs-layouts');
// const db = require('./config/mongoose');

// // const path = require('path');



// //form data ka lia
// app.use(express.urlencoded());


// // Static files ka lia
// app.use(express.static('./assets'));


 
// app.use(expressLayouts);

// //setup Static files to be accesed at diff places in views
// app.set('layout extractStyles' , true); 
// app.set('layout extractScripts', true)
 

//  //setup of view engine
// app.set('view engine' , 'ejs');
// // app.use('views' , path.join(__dirname , 'views'));
// app.set('views' , 'views');





//  app.use('/' , require('./routes'));
 


// app.listen( port, ()=>{
//    console.log("server is running on port no" , port);
// });
 
const express = require('express');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('./config/mongoose'); // Assuming this is your database configuration
const routes = require('./routes');

// Create an Express app
const app = express();
const port = 8000;

// Middleware setup
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./assets'));
app.use(expressLayouts);

// View engine setup
app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.get('/check-cookie-name', (req, res) => {
   const cookies = req.cookies;
   const cookieNames = Object.keys(cookies);
 
   res.send(`Cookie names: ${cookieNames.join(', ')}`);
 });

// Routes setup
app.use('/', routes);


app.listen( port, ()=>{
   console.log("server is running on port no" , port);
});
 