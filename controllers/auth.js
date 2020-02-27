const User = require('../models/user');

// @desc      Register User
// @route     POST /api/v1/auth/register
// @access    public
exports.register = async(req, res, next) => {
    res.status(200).json({
        success: true
    });
};