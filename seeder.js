const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

//Link env var
dotenv.config({ path: './config/config.env' });

//Load models
const Hackathon = require('./models/Hackathon');

//Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//Read JSON file present in _data folder
const dataHackathon = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/hackathons.json`, 'utf-8')
);

//Import into database
const importData = async() => {
    try {
        await Hackathon.create(dataHackathon);
        console.log('Data added...'.green.inverse);
        process.exit();
    } catch (err) {
        console.log(err.message);
    }
};

//Delete from database
const deleteData = async() => {
    try {
        await Hackathon.deleteMany();
        console.log('Data deleted...'.red.inverse);
        process.exit();
    } catch (err) {
        console.log(err.message);
    }
};

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}