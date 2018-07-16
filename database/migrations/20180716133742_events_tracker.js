
exports.up = function(knex) {
  return createUsersTable(knex)
    .then(createEventsTable)
    .then(createTimeSlotsTable)
    .catch(error => {
      console.log(error);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('timeslots')
    .then(() => {
      console.log("Dropping Events Table");
      return knex.schema.dropTableIfExists('events');
    })
    .then(() => {
      console.log("Dropping Users Table");
      return knex.schema.dropTableIfExists('users');
    })
    .catch(error => console.log(error));
};

createUsersTable = knex => {
  console.log('creating users table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('users', table => {
        table.increments('id').primary();
        table.string('username', 128).notNullable().unique();
        table.string('email', 128).notNullable().unique();
        table.string('password', 128).notNullable();
        table.timestamp('createAt').defaultTo(knex.fn.now());

        console.log('users table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  });
};

createEventsTable = knex => {
  console.log('creating events table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('events', table => {
        table.increments('id').primary();
        table.string('title', 255);
        table.text('content', 'longtext');
        table
          .integer('userID')
          .references('id')
          .inTable('users')
          .notNullable()
          .onDelete('CASCADE')
          .index();
        table.timestamp('createdAt').defaultTo(knex.fn.now());

        console.log('events table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  });
};

createTimeSlotsTable = knex => {
  console.log('creating timeSlots table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('timeSlots', table => {
        table.increments('id').primary();
        table.integer('start').notNullable();
        table.integer('stop').notNullable();
        table
          .integer('eventID')
          .references('id')
          .inTable('events')
          .notNullable()
          .onDelete('CASCADE')
          .index();
        table.timestamp('createdAt').defaultTo(knex.fn.now());

        console.log('timeSlots table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  });
};
