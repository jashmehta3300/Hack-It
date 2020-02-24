const express = require('express');
const router = express.Router();

//basic routing

router.get('', (req, res) => {
    res.status(200).json({ success: true, msg: 'show all hackathons' });
});

router.get('/:id', (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: `show hackathon ${req.params.id}` });
});

router.post('', (req, res) => {
    res.status(200).json({ success: true, msg: 'add new hackathon' });
});

router.put('/:id', (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: `update hackathon ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: `delete hackathon ${req.params.id}` });
});

module.exports = router;