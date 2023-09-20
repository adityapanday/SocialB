const express = require ('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');


// const path = require('path');

// Static files ka lia
app.use(express.static('./assets'));


 
app.use(expressLayouts);

//setup Static files to be accesed at diff places in views
app.set('layout extractStyles' , true);
 
app.set("layout extractScripts", true)
 

 //setup of view engine
app.set('view engine' , 'ejs');
// app.use('views' , path.join(__dirname , 'views'));
app.set('views' , 'views');





 app.use('/' , require('./routes'));
 


app.listen( port, ()=>{
   console.log("server is running on port no" , port);
});
 
