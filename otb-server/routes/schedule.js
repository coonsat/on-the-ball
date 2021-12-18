const express = require('express');
const app = express();
const router = express.Router();
const { Users } = require('../models'); 

// retrieve middleware
const { authToken } = require('../middleware/auth-token');
const { asyncHandler } = require('../middleware/async-handler');

// router.get('/', authToken, (req, res) => {
//     // add parameters for date time filters
//     // e.g. for week, month, day
//     // const userId = req.user.id;
//     const schedule = Bookings.findAll({
//         where: {userid: req.user.id}
//     });
// console.log('work in progress')
// res.status(201).json({ message: 'work in progress'});

//     return res.status(201).json(schedule).end();
// });

router.get('/', (req, res) => {
    res.status(201).json({ message: 'work in progress'});
});

// router.get('/', authToken, asyncHandler((req, res) => {
//         // add parameters for date time filters
//     // e.g. for week, month, day
//     // const userId = req.user.id;
//     const schedule = Bookings.findAll({
//         where: {userid: req.user.id}
//     });

//     return res.status(201).json(schedule).end();
// }));

module.exports = router; 