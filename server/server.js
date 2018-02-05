const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
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
  text: 'Wash the dog',
});

otherTodo
  .save()
  .then(
    result => console.log(JSON.stringify(result, undefined, 2)),
    error => console.log('Unable to save todo.')
  );


// const User = mongoose.model('User', {
//   name: {
//     type: String
//   },
//   email: {
//     type: String,
//     require: true,
//     minlength: 1,
//     trim: true,
//   }
// });

// const newUser = new User({
//   name: 'Bob',
//   email: 'bob@gmail.com'
// });

// newUser
//   .save()
//   .then(
//     result => console.log(result),
//     error => console.log(error)
//   )

