//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
//   },(err)=>{
//     console.log('Unable to connect',err);
//   });
// db.collection('Users').find({name:'Tisha'}).toArray().then((docs)=>{
//   console.log('The documnet are given below: ');
//   console.log(JSON.stringify(docs,undefined,2));
//
// },(err)=>{
//   console.log('Unable to connect',err);
// });

  db.collection('Users').find({name:'Tisha'}).count().then((count)=>{
    console.log(`Total recodes: ${count}`);
  },(err)=>{
    console.log('Unable to fect data',err);
  });

  //db.close();
});
