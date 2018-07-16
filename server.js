const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const usersEndpoints = require('./users/usersEndpoints');
const eventsEndpoints = require('./events/eventsEndpoints');
const timeSlotsEndpoints = require('./timeSlots/timeSlotsEndpoints');

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.use('/api/users', usersEndpoints);
server.use('/api/events', eventsEndpoints);
server.use('/api/timeSlots', timeSlotsEndpoints);

server.listen(PORT, error => {
  if (error) console.log(error);
  console.log(`Server running on ${PORT}`);
});