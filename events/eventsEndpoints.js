const express = require('express');

const events = require('./eventsControllers');

const eventsRouter = express.Router();

eventsRouter.post('/', (req, res) => {
  const event = req.body;
  events
    .insert(event)
    .then(event => {
      res.status(201).json(event);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

eventsRouter.get('/', (req, res) => {
  events
    .get()
    .then(events => {
      res.status(200).json(events);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

eventsRouter.get('/:id/eventDetails', (req, res) => {
  const { id } = req.params;

  events
    .getEventDetails(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ error, message: "Error when fetch event details" });
    })
})

eventsRouter.put('/:id', (req, res) => {
  const { id } = req.params;

  events
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

eventsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  events
    .remove(id)
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

module.exports = eventsRouter;