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
  const id = req.params.id;
  
  events
    .getEventDetails(id)
    .then(data => {
      const details = {
        eventID: null,
        title: '',
        content: '',
        userID: null,
        timeSlots: [],
      };

      data.forEach(datum => {
        details.eventID = id;
        details.title = datum.title;
        details.content = datum.content;
        details.userID = datum.userID;
        details.timeSlots.push({ timeSlot_id: datum.id, timeSlot_start: datum.start, timeSlot_stop: datum.stop, timeSlot_createAt: datum.createdAt});
      });

      res.status(200).json(details);
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