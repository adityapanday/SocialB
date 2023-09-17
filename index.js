const express = require ('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app = express();
const path = require('path');

 const port = 8000;

app.use(require('express-ejs-layouts'));


 //setup of view engine
app.set('view engine' , 'ejs');
// app.use('views' , path.join(__dirname , 'views'));
app.set('views' , 'views');





 app.use('/' , require('./routes'));



app.listen( port, ()=>{
   console.log("server is running on port no" , port);
});
 
