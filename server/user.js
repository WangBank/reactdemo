const express = require('express')
const Router = express.Router()
const models = require('./model/user_model')
const User = models.getModel('user')
const _filter = {'pwd':0,'__v':0}

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
          res.cookie('userid',d._id)
          return res.json({code:0,data:d})
        }
      })
    }
  })  
})

Router.post('/login',function(req,res){
  console.log(req.body)
  const{username,pwd} = req.body
  User.findOne({username,pwd},_filter,(e,d)=>{
    if (d) {
      res.cookie('userid',d._id)
      return res.json({code:0,data:d})
    }else{
      return res.json({code:1,msg:'username or password not correct!'})
    }
  })
})

Router.get('/info',function(req,res){
  const {userid} = req.cookies
  if(!userid){
    return res.json({code:1})
  }

  User.findOne({_id:userid},_filter,(e,d)=>{
    if(e){
      return res.json({code:1})
    }
    if(d){
      return res.json({code:0,data:d})
    }
  })

})


module.exports = Router