const express = require('express');

const users = require('./usersControllers');

const usersRouter = express.Router();

usersRouter.post('/', (req, res) => {
  const user = req.body;
  users
    .insert(user)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

usersRouter.get('/', (req, res) => {
  users
    .get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

usersRouter.put('/:id', (req, res) => {
  const { id } = req.params;

  users
    .update(id, req.body)
    .then(count => {
      if (count > 0) {
        res.status(200).json({updated: count});
      } else {
        res.status(404).json(null);
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

usersRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  users
    .remove(id)
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

module.exports = usersRouter;