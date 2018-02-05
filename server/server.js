const express = require('express');
const {ObjectID} = require('mongodb');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// add Todo item
app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo
    .save()
    .then(
      doc => res.send(doc),
      error => res.status(400).send(error)
    )
});

// get all Todo items
app.get('/todos', (req, res) => {
  Todo
    .find()
    .then(
      todos => res.send({todos}),
      error => res.status(400).send(error)
    )
});

// get Todo item
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send({errorMessage: 'Not valid ID'});
  }

  Todo
    .findById(id)
    .then(todo => {
      if (!todo) return res.status(404).send({errorMessage: 'Not found Todo item'});
      res.status(200).send({todo});
    })
    .catch(error => res.status(400));

});

app.listen(3000, () => {
  console.log(`Started up on port ${port}`);
});

module.exports = {app};