//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

// var user={name:'Jakir',age:25};
// var {name}=user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  // });
  //Insert new document into users (name, age,locastion)

  // db.collection('Users').insertOne({
  //
  //   name: 'Tisha',
  //   age: 22,
  //   location: 'Dhaka'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert data',err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // })


  db.close();
});
