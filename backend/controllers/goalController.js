
// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals = (req,res) => {
    res.status(200).json({
        message:'get goals'
    })
}


// @desc Post goals
// @route POST /api/goals
// @access private
const setGoal = (req,res) => {
    if(!req.body.goal){
        res.status(400)
        throw new Error('Please add a text field')
    }
}


// @desc Get goals
// @route GET /api/goals
// @access private
const updateGoal = (req,res) => {
    res.status(200).json({
        message:`Update a goal ${req.params.id}`
    })
}
// @desc Get goals
// @route GET /api/goals
// @access private

const deleteGoal = (req,res) => {
    res.status(200).json({
        message:`Delete a goal ${req.params.id}`
    })
}



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}