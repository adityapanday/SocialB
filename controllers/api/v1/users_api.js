
const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

const  secret1 = 'Aditya';
// module.exports.createSession = async function(req, res){

//     try{
//         let user = await User.findOne({email: req.body.email});
         
//         if (!user || user.password != req.body.password){
          
//             return res.json(422, {
//                 message: "Invalid username or password"
//             });
//         }

//         return res.json(200, {
//             message: 'Sign in successful, here is your token, please keep it safe!',
//             data:  {
//                 //                              Encrypt via code which is in config
//                 token: jwt.sign(user.toJSON(), secret1, {expiresIn:  '10000'})
//             }
//         })

//     }catch(err){
//         console.log('********', err);
//         return res.json(500, {
//             message: "Internal Server Error"
//         });
//     }
// }
module.exports.createSession = async function(req, res) {
    try {
        let user = await User.findOne({ Email: req.body.email });

        if (!user || user.password !== req.body.password) {
            return res.status(422).json({
                message: "Invalid username or password"
            });
        }

        const token = jwt.sign({ userId: user._id }, secret1, { expiresIn: '1h' });

        return res.status(200).json({
            message: 'Sign in successful, here is your token, please keep it safe!',
            data: {
                token: token
            }
        });
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}