'use strict';

const express = require('express');
const { append } = require('express/lib/response');
const morgan = require('morgan');
const { sequelize } = require ('./models');
const bodyParser = require('body-parser');
const cors = require('cors');

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use(morgan('dev'));

const auth = require('./routes/authentication');
// const schedule = require('./routes/schedule');
app.use('/api/v1/authentication', auth);
// app.use('/api/v1/schedule', schedule);

// send 404 if no other route matched
app.use((req, res) => {
    res.status(404).json({
      message: 'Route Not Found',
    });
});
  
// setup a global error handler
app.use((err, req, res, next) => {
if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
}

res.status(err.status || 500).json({
    message: err.message,
    error: {},
});
});
  
  // connect to db and test connection
(async () => {
try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log('Successful database connection');
} catch(error) {
    console.log('Unable to connect to the database', error);
    error.status = 500;
}
})();

const PORT = 4000;
app.set('port', PORT);

// start listening to port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});