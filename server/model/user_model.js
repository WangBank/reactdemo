const mongoose = require('mongoose')

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
