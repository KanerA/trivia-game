require('dotenv').config();
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const validateToken = (req, res, next) => {
    const bearerToken = req.headers['authorization'];
    if(!bearerToken) return res.sendStatus(403);
    req.token = bearerToken.slice(7);
    return jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err){
            return res.status(403).send('Invalid Access Token');
        }
        req.user = decoded;
        next();
    });
};

module.exports = { validateToken };