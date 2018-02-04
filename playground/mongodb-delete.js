const {MongoClient, ObjectID} = require('mongodb');

const db_url = 'mongodb://localhost:27017';
const db_name = 'TodoApp';
const col_name = 'Users'; // Todos or Users

MongoClient.connect(db_url, (error, client) => {
  if (error) {
    console.log('Unable to connect MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  const col = client.db(db_name).collection(col_name);

  // deleteMany
  // col
  //   .deleteMany({text: "Drink vodka"})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // deleteOne
  // col
  //   .deleteOne({text: "Drink vodka"})
  //   .then(result => console.log(result));

  // findOneAndDelete
  // col
  //   .findOneAndDelete({completed: false})
  //   .then(result => console.log(result));

  // Challenge
  col.deleteMany({name: 'Eric'});

  col
    .findOneAndDelete({_id: ObjectID('5a76d7cd693705156da765f7')})
    .then(result => console.log(result));

  client.close();
});