const express = require('express')
const Router = express.Router()
const models = require('./model/user_model')
const User = models.getModel('user')

Router.get('/list',function(req,res){
  User.find({},function(err,doc){
    return res.json(doc)
  })
})

Router.post('/register',function(req,res){
  console.log(req.body)
  const{username,pwd} = req.body
  User.findOne({username},(e,d)=>{
    if (d) {
      return res.json({code:1,msg:'username is duplicate!'})
    }else{
      User.create({username,pwd},(e,d)=>{
        if(e){
          return res.json({code:1,msg:'create error, please try again!'})
        }else{
          return res.json({code:0})
        }
      })
    }
  })
})

Router.post('/login',function(req,res){
  console.log(req.body)
  const{username,pwd} = req.body
  User.findOne({username,pwd},{pwd:0},(e,d)=>{
    if (d) {
      return res.json({code:0,data:d})
    }else{
      return res.json({code:1,msg:'username or password not correct!'})
    }
  })
})

Router.get('/info',function(req,res){
  return res.json({code:1})
})

Router.get('/register',function(req,res){
  return res.json({code:1})
})

module.exports = Router