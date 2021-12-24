const express = require('express');
const app = express();
const router = express.Router();
const { Users, Booking } = require('../models'); 

// retrieve middleware
const { authenticateToken } = require('../middleware/auth-token');
const { asyncHandler } = require('../middleware/async-handler');

const Sequelize = require('sequelize');

// Override timezone formatting for MSSQL
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
  };

// Get bookings - TO DO - get user id from token.
router.get('/', authenticateToken, asyncHandler( async(req, res) => {
    try {
        const startDate = req.body.filter.timeFrame.start;
        const endDate = req.body.filter.timeFrame.end;
        const userId = req.body.filter.userId;
        const contractId = req.body.filter.contractId;
        const customerId = req.body.filter.customerId;

        if (startDate && endDate)
        const schedule = await Booking.findAll({
            where: {userId: req.user.id}
        });

        return res.status(201).json(schedule).end();

        // const courses = await Courses.findAll({
        //     attributes: ['id', 'title', 'description', 'estimatedTime', 'materialsNeeded'],
        //     include: [{
        //             model: Users,
        //             attributes: ['id', 'firstName', 'lastName', 'emailAddress']
        //     }]
        // });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error'});
    }
}));

// router.get('/', authToken, asyncHandler((req, res) => {
//         // add parameters for date time filters
//     // e.g. for week, month, day
//     // const userId = req.user.id;
//     const schedule = Bookings.findAll({
//         where: {userid: req.user.id}
//     });

//     return res.status(201).json(schedule).end();
// }));


// add booking
router.post('/', asyncHandler( async(req, res) => {
        try {
            await Booking.create({
                startDateTime: req.body.filter.timeFrame.start,
                endDateTime : req.body.filter.timeFrame.end,
                sessionType : req.body.filter.sessionType,
                userId : req.body.filter.userId,
                customerId : req.body.filter.customerId,
                contractId: req.body.filter.contractId
            });

            res.status(201).json();
        } catch (err) {
            if (
                error.name === 'SequelizeValidationError' ||
                error.name === 'SequelizeUniqueConstraintError'
            ) {
                const errors = error.errors.map((err) => err.message);
                res.status(400).json({errors});
            }
            res.status(500).json({ message: 'Internal server error' });
        }
    }
  )
);


module.exports = router; 