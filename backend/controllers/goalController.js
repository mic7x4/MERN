
const asycnHandler = require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals = asycnHandler(async (req,res) => {
    res.status(200).json({
        message:'get goals'
    })
})


// @desc Post goals
// @route POST /api/goals
// @access private
const setGoal = asycnHandler(async (req,res) => {
    if(!req.body.goal){
        res.status(400)
        throw new Error('Please add a text field')
    }
}
)

// @desc Get goals
// @route GET /api/goals
// @access private
const updateGoal = asycnHandler(async (req,res) => {
    res.status(200).json({
        message:`Update a goal ${req.params.id}`
    })
})
// @desc Get goals
// @route GET /api/goals
// @access private

const deleteGoal = asycnHandler(async (req,res) => {
    res.status(200).json({
        message:`Delete a goal ${req.params.id}`
    })
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}