//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB server');

  //FindOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a9fedd8edbe0e24dd1fc1ba')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5a9d6bc9d761f22f28deec7c')
  },{
    $set:{
      name: 'Bancha'
    },
    $inc:{
      age: +1
    }
  },{

    
  }).then((result)=>{
    console.log(result);
  });

  //db.close();
});
