const db = require('../database/dbConfiguration');

module.exports = {
  get: id => {
    let query = db('events');
    if (id) {
      query.where('id', id).first();
    }
    return query;
  },

  insert: event => {
    return db('events')
      .insert(event)
      .then(ids => ({ id: ids[0] }));
  },

  update: (id, event) => {
    return db('events')
      .where('id', id)
      .update(event);
  },

  remove: id => {
    return db('events')
      .where('id', id)
      .del();
  },
}