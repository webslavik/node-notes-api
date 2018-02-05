const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


/**
 *  Todo
 */
const id = '5a787d0fe6a6f51304725673';

// Todo
//   .find({
//     _id: id
//   })
//   .then((todos) => {
//     console.log('Todos', todos);
//   });


// Todo
//   .findOne({
//     _id: id
//   })
//   .then((todo) => {
//     console.log('Todo', todo);
//   });

// Todo
//   .findById(id)
//   .then((todo) => {
//     if  (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
//   })
//   .catch(error => console.log(error));


/**
 *  User
 */
User
  .findById('5a782bd976c33c07dc8c0e0b')
  .then(user => {
    if (!user) {
      return console.log('User is not defined');
    }
    console.log('User:', user);
  })
  .catch(error => console.log(error));