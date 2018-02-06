const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// remove all
// Todo
//   .remove({})
//   .then((result) => {
//     console.log(result);
//   });

// remove one
// Todo
//   .findOneAndRemove({_id: '5a795c360f9f18ec48467c31'})
//   .then(todo => console.log(todo));

// remote by id
Todo
  .findByIdAndRemove('5a795c700f9f18ec48467c54')
  .then(todo => console.log(todo));