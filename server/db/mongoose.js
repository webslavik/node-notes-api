const mongoose = require('mongoose');

const REMOTE_MONGO = 'mongodb://<dbuser>:<dbpassword>@ds125318.mlab.com:25318/node-todo-api';
const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;

mongoose.Promise = global.Promise;
mongoose
  .connect(MONGO_URI)
  .then(
    () => console.log('Connected to Mongo instance.'),
    error => console.log('Error connecting to Mongo instance: ', error)
  );

module.exports = {
  mongoose
};