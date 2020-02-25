const Hackathon = require('../models/Hackathon');
const asyncHandler = require('../middleware/async');

// @desc       Show all hackathons
// @route      GET /api/v1/hackathons
// @access     public
exports.getHackathons = async(req, res, next) => {
    try {
        const hackathons = await Hackathon.find();
        res.status(200).json({
            success: true,
            count: hackathons.length,
            data: hackathons
        });
    } catch (err) {
        console.log(err.message.red.underline);
        res.status(400).json({
            success: false
        });
    }
    // res.status(200).json({ success: true, msg: 'show all hackathons' });
};

// @desc       Show a particular hackathon
// @route      GET /api/v1/hackathons/:id
// @access     public
exports.getHackathon = async(req, res, next) => {
    try {
        const hackathonById = await Hackathon.findById(req.params.id);

        if (!hackathonById) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: hackathonById
        });
    } catch (err) {
        console.log(err.message.red.underline);
        res.status(400).json({
            success: false
        });
    }
    // res
    //     .status(200)
    //     .json({ success: true, msg: `show hackathon ${req.params.id}` });
};

// @desc       Add a new hackathon
// @route      POST /api/v1/hackathons
// @access     public
exports.createHackathons = async(req, res, next) => {
    try {
        const hackathon = await Hackathon.create(req.body);
        res.status(201).json({
            success: true,
            data: hackathon
        });
    } catch (err) {
        console.log(err.message.red.underline);
        res.status(400).json({
            success: false
        });
    }

    // console.log(req.body);
    // res.status(200).json({ success: true, msg: 'add new hackathon' });
};

// @desc       Update a particular hackathon
// @route      PUT /api/v1/hackathons/:id
// @access     public
exports.updateHackathon = async(req, res, next) => {
    try {
        const hackathon = await Hackathon.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true,
                runValidators: true //Mongoose validators
            }
        );
        if (!hackathon) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: hackathon
        });
    } catch (err) {
        console.log(err.message.red.underline);
        res.status(400).json({
            success: false
        });
    }

    // res
    //     .status(200)
    //     .json({ success: true, msg: `update hackathon ${req.params.id}` });
};

// @desc       Delete a particular hackathon
// @route      DELETE /api/v1/hackathons/:id
// @access     public
exports.deleteHackathon = async(req, res, next) => {
    try {
        const hackathon = await Hackathon.findByIdAndDelete(req.params.id);
        if (!hackathon) {
            res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        console.log(err.message.red.underline);
        res.status(400).json({
            success: false
        });
    }

    // res
    //     .status(200)
    //     .json({ success: true, msg: `delete hackathon ${req.params.id}` });
};