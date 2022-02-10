const express = require('express')
const router = express.Router()




router.get('/',(req,res) => {
    res.status(200).json({
        message:'get goals'
    })
})
router.post('/',(req,res) => {
    res.status(200).json({
        message:'Goal created'
    })
})
router.put('/:id',(req,res) => {
    res.status(200).json({
        message:`Updated goal ${req.params.id}`
    })
})
router.delete('/:id',(req,res) => {
    res.status(200).json({
        message:`Deleted goal ${req.params.id}`
    })
})


module.exports = router