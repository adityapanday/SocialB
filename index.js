const express = require ('express');
const app = express();

 const port = 8000;
 app.use('/' , require('./routes'));


app.get('/' ,(req,res)=>{
 res.send("just checking");
});



app.listen( port, ()=>{
   console.log("server is running on port no" , port);
});
 
