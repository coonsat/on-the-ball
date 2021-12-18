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

module.exports = router;