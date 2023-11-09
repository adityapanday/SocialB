
const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

const  secret1 = 'Aditya';

module.exports.createSession = async function(req, res) {
  
    try {
        let user = await User.findOne({ Email: req.body.email });

        if (!user || user.password !== req.body.password) {
            return res.status(422).json({
                message: "Invalid username or password"
            });
        }

        const token = jwt.sign({ userId: user._id }, secret1, { expiresIn: '1000000' });

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