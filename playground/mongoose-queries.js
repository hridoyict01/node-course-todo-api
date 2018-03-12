const {ObjectID}=require('mongodb');

const {mongoose}=require('./../Server/db/mongoose');
const {Todo}=require('./../Server/models/todo');
const {User}=require('./../Server/models/users');

var id='5aa1277283704ac029db4f36';

User.findById(id).then((user)=>{
  if(!user){
    console.log('No users found');
  }
  console.log(JSON.stringify(user,undefined, 2));
}).catch((e)=>console.log(e));




//
// var id='5aa5560e8f2da0741dcf9523';
//
// if(!ObjectID.isValid(id)){
//   console.log('Id is not valid');
// }
//
// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id:id
//   }).then((todo)=>{
//   console.log('Todo',todo);
//   });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo: ',todo);
// }).catch((e)=>console.log(e));
