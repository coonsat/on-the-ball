const { Users } = require('../models');
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');

/**
 * Middleware to authenticate the request using JWT.
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {Function} next - The function to call to pass execution to the next middleware.
 */

 exports.authenticateToken = async (req, res, next) => {
    let message;
    
    try {

        // get the token from the authorisation header
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (token === null) res.status(401).json({ message: 'Access Denied' });

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) res.status(403).json({ message: 'Insufficient rights' })
            
            // add user to request
            req.user = user;
        });

    } catch (err) {

    }

    next();
};
