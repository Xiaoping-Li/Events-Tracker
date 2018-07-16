const db = require('../database/dbConfiguration');

module.exports = {
  get: id => {
    let query = db('timeSlots');
    if (id) {
      query.where('id', id).first();
    }
    return query;
  },

  insert: timeSlot => {
    return db('timeSlots')
      .insert(timeSlot)
      .then(ids => ({ id: ids[0] }));
  },

  update: (id, timeSlot) => {
    return db('timeSlots')
      .where('id', id)
      .update(timeSlot);
  },

  remove: id => {
    return db('timeSlots')
      .where('id', id)
      .del();
  },
}