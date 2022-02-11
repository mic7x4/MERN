
// @desc Register new user
// @route POST /api/users
// @access public
const registerUser = (req,res) => {
    res.json({message: 'register user'})
}


// @desc Authenticate user
// @route POST /api/users/login
// @access public
const loginUser = (req,res) => {
    res.json({message: 'login User'})
}


// @desc Get user data
// @route Get /api/users/me
// @access public
const getMe = (req,res) => {
    res.json({message: 'Get me'})
}


module.exports = {
    registerUser,
    loginUser,
    getMe
}