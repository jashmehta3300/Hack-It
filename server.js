const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

//Route files
const hackathons = require('./routes/hackathons');

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

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

app.listen(
    PORT,
    console.log(
        `The server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);