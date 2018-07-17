import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({event}) => {
  return (
    <Link to={`/eventDetails`}>
      {event.title}
      <button>X</button>
    </Link>
  );
}

export default Event;