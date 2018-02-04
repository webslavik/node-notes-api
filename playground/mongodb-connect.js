// const MongoClient = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

const id = new ObjectID();
console.log(id);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log(`Unable to connect to MongoDB server.`);
  }

  console.log(`Connected to MongoDB server.`);
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.pos, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Eric',
  //   age: 12,
  //   location: 'Boston'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }

  //   console.log(JSON.stringify(result.ops[0], undefined, 2));
  //   console.log(result.ops[0]);
  // });

  client.close();
});