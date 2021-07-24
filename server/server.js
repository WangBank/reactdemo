const express = require('express')
const mongoose = require('mongoose')
const app = express()

const mongo_url = 'mongodb://192.168.5.100:27017/react_quick_start'
mongoose.connect(mongo_url)

mongoose.connection.on('connected',function(){
  console.log('connect mongodb success')
})

const User = mongoose.model('user',new mongoose.Schema(
  {
    name:{type:String,require:true},
    age:{type:Number,require:true}
  }
))

// User.create({
//   name:'qinlimin gh',
//   age:18
// },(err,doc)=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log(doc)
//   }
// })

User.remove({name:'wangzhen'},(err,doc)=>{
  if(err){
        console.log(err)
      }else{
        console.log(doc)
      }
})

app.get('/data',function(req,res){
  User.find({},function(err,doc){
    if(err){
      res.json({name:'qinlimin',age:25})
    }else{
      res.json(doc)
    }
  })
})

app.get('/update',function(req,res){
  User.update({'name':'qinlimin gh'},{'$set':{age:18}},(err,doc)=>{
    if(err){
      res.json(err)
        }else{
          res.json(doc)
        }
  }
  )
})

app.listen(3001,function(){
  console.log('node js app is start')
})