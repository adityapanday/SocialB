const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ConnectB")
.then(()=>console.log("connected to data base"))
.catch((err)=>console.log("errer in connecting to data base"));