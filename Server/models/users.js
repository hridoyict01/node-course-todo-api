 const mongoose=require('mongoose');
 const validator=require('validator');

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
    minlenght:1,
    unique:true,
    validate:{
      validator:(value)=>{
        return validator.isEmail(value);
      },
      message:'{VALUE} is not a valid email address'
    }
  },
  password:{
    type:String,
    required:true,
    minlenght:6
  },
  tokens:[{
    access:{
      type:String,
      required:true
    },
    token:{
      type:String,
      required:true
    }
  }]
});

module.exports={User};
