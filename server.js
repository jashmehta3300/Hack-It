const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

//load env vars
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

const app = express();

//Route files
const hackathons = require('./routes/hackathons');

//Dev middleware Morgan
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    console.log(`${process.env.NODE_ENV} mode running.`);
}

//Mount routers
app.use('/api/v1/hackathons', hackathons);

//access env vars
const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        `The server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //close server and exit process
    server.close(() => process.exit(1));
});