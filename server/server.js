const express = require('express')
const userRouter = require('./user')

const app = express()

app.use('/user',userRouter)

app.listen(3001,function(){
  console.log('node js app is start')
})