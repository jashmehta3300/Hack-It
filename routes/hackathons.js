const express = require('express');
const router = express.Router();
const {
    getHackathons,
    getHackathon,
    createHackathons,
    updateHackathon,
    deleteHackathon
} = require('../controllers/hackathons');

router
    .route('/')
    .get(getHackathons)
    .post(createHackathons);

router
    .route('/:id')
    .get(getHackathon)
    .put(updateHackathon)
    .delete(deleteHackathon);

module.exports = router;