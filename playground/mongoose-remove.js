const {ObjectID}=require('mongodb');

const {mongoose}=require('./../Server/db/mongoose');
const {Todo}=require('./../Server/models/todo');
const {User}=require('./../Server/models/users');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5aa7ed38b307be0aeaa35a22').then((doc)=>{
  console.log(doc);
});
