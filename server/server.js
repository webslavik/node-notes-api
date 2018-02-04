const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// const newTodo = new Todo({
//   text: 'Take a car'
// });

// newTodo
//   .save()
//   .then(
//     result => console.log(JSON.stringify(result, undefined, 2)),
//     error => console.log('Unable to save todo.')
//   );

const otherTodo = new Todo({
  text: 'Some awesome todo',
  completed: false,
  completedAt: 123
});

otherTodo
  .save()
  .then(
    result => console.log(JSON.stringify(result, undefined, 2)),
    error => console.log('Unable to save todo.')
  );