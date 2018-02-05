const mongoose = require('mongoose');

const local_db_url = 'mongodb://localhost:27017/TodoApp';
const mlab_url = 'mongodb://<dbuser>:<dbpassword>@ds125318.mlab.com:25318/node-todo-api';

mongoose.Promise = global.Promise;
mongoose.connect(mlab_url);

module.exports = {
  mongoose
};