// 路由指南：https://expressjs.com/en/guide/routing.html

const express = require('express')
const router = express.Router()

router.get('/users',(req,res)=>{
    res.send('users')
})

router.post('/',(req,res)=>{
    res.send('Got a POST request')
})

// router.put 
// router.delete
// ... more