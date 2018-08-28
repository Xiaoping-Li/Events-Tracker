
exports.up = function(knex, Promise) {
  return knex.schema.table('events', table => {
    table.string('status', 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', table => {
    table.dropColumn('status');
  });
};

