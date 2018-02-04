const {MongoClient, ObjectID} = require('mongodb');

const db_name = 'TodoApp';
const col_name = 'Users'; // Todos, Users

MongoClient.connect('mongodb://localhost:27017', (error, client) => {
  if (error) {
    console.log('Unable to connect MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  const col = client.db(db_name).collection(col_name);

  // col.find({
  //   _id: new ObjectID('5a75bafd4294e452b4dffe84')
  // }).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to find documents', error);
  // });

  // col.find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (error) => {
  //   console.log('Unable to find documents', error);
  // });

  col
    .find({name: 'Eric'})
    .toArray()
    .then((users) => {
      console.log(JSON.stringify(users, undefined, 2));
    });
  
  client.close();
});