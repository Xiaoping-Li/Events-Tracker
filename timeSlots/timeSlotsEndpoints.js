const express = require('express');

const timeSlots = require('./timeSlotsControllers');

const timeSlotsRouter = express.Router();

timeSlotsRouter.post('/', (req, res) => {
  const timeSlot = req.body;
  timeSlots
    .insert(timeSlot)
    .then(timeSlot => {
      res.status(201).json(timeSlot);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

timeSlotsRouter.get('/', (req, res) => {
  timeSlots
    .get()
    .then(timeSlots => {
      res.status(200).json(timeSlots);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

timeSlotsRouter.put('/:id', (req, res) => {
  const { id } = req.params;

  timeSlots
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

timeSlotsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  timeSlots
    .remove(id)
    .then(count => {
      res.status(200).json({ count });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

module.exports = timeSlotsRouter;