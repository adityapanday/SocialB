module.exports.index = (req , res )=>{
    return res.json(200 , {message : "this is api for post " , post : []});
};