const User = require('../models/user');

// @desc      Register User
// @route     POST /api/v1/auth/register
// @access    public
exports.register = async(req, res, next) => {
    const { name, email, password, role } = req.body;

    //Create user
    const user = await User.create({
        name: name,
        email: email,
        password: password,
        role: role
    });

    res.status(200).json({
        success: true,
        data: user
    });
};