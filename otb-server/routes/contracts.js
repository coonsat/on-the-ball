const express = require('express');
const app = express();
const router = express.Router();

// Models
const { User, Contract, Customer } = require('../models');

// Middleware methods
const { authenticateToken } = require('../middleware/auth-token');
const { asyncHandler } = require('../middleware/async-handler');

// Get user-realted contract
router.get('/', authenticateToken, asyncHandler(async (req, res) => {
    try {
        const contracts = await Contract.findAll({
            where: {
                userId: req.user.id
            } 
        });
        res.status(200).json(contracts);
    } catch (error) {
        res.status(404).json('error');
    }
}));

// add contract 
router.post('/', asyncHandler(async (req, res) => {
    try {
        await Contract.create(req.body);
        res.status(201).location('/').end();
    } catch (error) {
        if ( 
            error.name === 'SequelizeValidationError' ||
            error.name === 'SequelizeUniqueConstraintError'
       ) {
           const errors = error.errors.map((err) => err.message);
           res.status(400).json({errors});
       } else {
            res.status(500).json({ message: 'An internal server error occured'});
       }
    }
}));

module.exports = router;