const asycnHandler = require('express-async-handler')
const { threadId } = require('worker_threads')
const Goal = require('../models/goalModal')
const User = require('../models/userModal')



// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals = asycnHandler(async (req,res) => {

    const goals = await Goal.find({user:req.user.id})

    res.status(200).json({goals})
})


// @desc Post goals
// @route POST /api/goals
// @access private
const setGoal = asycnHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(201).json({
        goal
    })
})

// @desc Get goals
// @route GET /api/goals
// @access private
const updateGoal = asycnHandler(async (req,res) => {
    const goal  = await Goal.findById(req.params.id)

    console.log(goal)

    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found ')
    }

    // Make sure the logged user mathes the goals user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(updatedGoal)
})
// @desc Get goals
// @route GET /api/goals
// @access private

const deleteGoal = asycnHandler(async (req,res) => {

    const goal = await Goal.findById(req.params.id)


    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const user = await User.findById(req.user.id)

    // check for user 
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goals

    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await Goal.deleteOne(goal)

    res.status(200).json({id:req.params.id})
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}