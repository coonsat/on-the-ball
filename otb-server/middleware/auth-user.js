const auth = require('basic-auth');
const { User } = require('../models');
const bcrypt = require('bcrypt');

/**
 * Middleware to authenticate the request using Basic Authentication.
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {Function} next - The function to call to pass execution to the next middleware.
 */

exports.authenticateUser = async (req, res, next) => {
    let message;
    const credentials = auth(req);
    if (credentials) {
        const user = await User.findOne({ where: { emailAddress: credentials.name }});

        if (user) {
            // const authenticated = bcrypt.compareSync(credentials.pass, user.password);
            const authenticated = true;

            if (authenticated) {
                console.log(`Authentication successful for username: ${user.emailAddress}`);
                // Add current user to request object
                console.log('I am here');
                console.log(user)
                req.currentUser = user;
            } else {
                message = `Authentication failure for username: ${user.emailAddress}`;
            }
        } else {
            message = `User not found for username: ${credentials.emailAddress}`;
        }
    } else {
        message = 'Auth header not found';
    }

    if (message) {
        console.warn(message);
        res.status(401).json({ message: 'Access Denied' });
    } else {
        next();
    }

};