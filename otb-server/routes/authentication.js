const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const router = express.Router();
app.use(express.json());
require('dotenv').config();

// Models
const { User } = require('../models');

// Middleware methods
const { authenticateUser } = require('../middleware/auth-user');
const { authToken } = require('../middleware/auth-token');
const { asyncHandler } = require('../middleware/async-handler');

router.post('/login', authenticateUser, asyncHandler( async(req, res) => {

    const user = {
        id: req.currentUser.id,
        firstName: req.currentUser.firstName,
        lastName: req.currentUser.lastName,
        emailAddress: req.currentUser.emailAddress,
    };

    // assign new access and refresh token to user 
    user.accessToken = (jwt.sign(user, process.env.ACCESS_TOKEN_SECRET));
    user.refreshToken = (jwt.sign(user, process.env.REFRESH_TOKEN_SECRET));

    res.status(201).json({ user });
}));

router.post('/token', (req, res) => {
        const refreshToken = req.body.token;
        if ( refreshToken === null ) return res.status(401).end();
        if ( !refreshToken.includes(refreshToken)) return res.status(403).end();
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403).end();
            const accessToken = generateAccessToken({ name : user.name });
            res.status(201).json({accessToken});
        }); 
    }
);

router.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.status(204).end();
});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
  }

module.exports = router; 