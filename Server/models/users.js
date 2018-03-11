var mongoose=require('mongoose');

var User=mongoose.model('User',{
  name:{
    type: String,
    required: true,
    minlenght:1,
    trim :true
  },
  email:{
    type:String,
    trim:true,
    required: true,
    minlenght:1
  }
});

module.exports={User};
