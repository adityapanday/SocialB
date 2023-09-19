const express = require ('express');
const expressEjsLayouts = require('express-ejs-layouts');

const app = express();
const path = require('path');

// Static files ka lia
app.use(express.static('./assets'));

 const port = 8000;

app.use(expressEjsLayouts);

//setup Static files to be accesed at diff places in views
app.set('layout extract Styles' , true);
app.set('layout extract Scrypts' , true);


 //setup of view engine
app.set('view engine' , 'ejs');
// app.use('views' , path.join(__dirname , 'views'));
app.set('views' , 'views');





 app.use('/' , require('./routes'));
 


app.listen( port, ()=>{
   console.log("server is running on port no" , port);
});
 
