const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

// Models
const { User } = require('../models');

// Middleware methods
const { asyncHandler } = require('../middleware/async-handler');

// Create user
router.post('/', asyncHandler(async(req, res) => {
    try {
        await User.create(req.body);
        res.status(201).location('/').end();
    } catch (error) {
        if ( 
            error.name === 'SequelizeValidationError' ||
            error.name === 'SequelizeUniqueConstraintError'
       ) {
           const errors = error.errors.map((err) => err.message);
           res.status(400).json({errors});
       } else {
           throw error;
       }
    }
}));

module.exports = router;