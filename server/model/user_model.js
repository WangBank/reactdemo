const mongoose = require('mongoose')

const mongo_url = 'mongodb://192.168.5.100:27017/react_quick_start'
mongoose.connect(mongo_url)

mongoose.connection.on('connected',function(){
  console.log('connect mongodb success')
})

const Models = {
  user:{
    'username':{type:String,require:true},
    'pwd':{type:String,require:true},
    'avatar':{type:String}
  }
}

for(let m in Models){
  mongoose.model(m,new mongoose.Schema(Models[m]))
}

module.exports = {
  getModel:function(name){
    return mongoose.model(name)
  }
}
