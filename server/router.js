const express = require('express')
const router = express.Router()
const {users} = require('./users')

router.get('/' , (req,res)=>{
    res.send('Server is running....')
})

module.exports = router