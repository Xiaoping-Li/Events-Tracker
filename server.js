const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const server = express();

server.listen(PORT, error => {
  if (error) console.log(error);
  console.log(`Server running on ${PORT}`);
});