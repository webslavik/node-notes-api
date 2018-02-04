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

  // col
  //   .findOneAndUpdate({
  //     _id: new ObjectID('5a75bcc1af7a7d4274eeed3d')
  //   }, {
  //     $set: {
  //       name: 'false'
  //     }
  //   }, {
  //     returnOriginal: false
  //   })
  //   .then(result => console.log(result));

  // Challenge
  col
    .findOneAndUpdate({
      _id: new ObjectID('5a75bcc1af7a7d4274eeed3d')
    }, {
      $set: {
        name: 'Slavik'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    })
    .then(result => console.log(result));

  client.close();
});