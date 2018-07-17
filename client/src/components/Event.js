import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Event = ({event}) => {
  return (
    <Link to={`/events/${event.id}/eventDetails`}>
      {event.title}
      <button>X</button>
    </Link>
  );
}

export default Event;