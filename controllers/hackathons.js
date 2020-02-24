// @desc       Show all hackathons
// @route      GET /api/v1/hackathons
// @access     public
exports.getHackathons = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'show all hackathons' });
};

// @desc       Show a particular hackathon
// @route      GET /api/v1/hackathons/:id
// @access     public
exports.getHackathon = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `show hackathon ${req.params.id}` });
};

// @desc       Add a new hackathon
// @route      POST /api/v1/hackathons
// @access     public
exports.createHackathons = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'add new hackathon' });
};

// @desc       Update a particular hackathon
// @route      PUT /api/v1/hackathons/:id
// @access     public
exports.updateHackathon = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `update hackathon ${req.params.id}` });
};

// @desc       Delete a particular hackathon
// @route      DELETE /api/v1/hackathons/:id
// @access     public
exports.deleteHackathon = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `delete hackathon ${req.params.id}` });
};