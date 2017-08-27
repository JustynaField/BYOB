/* eslint-disable func-names */

exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('brewery', (table) => {
      table.increments('id').primary();
      table.string('name').unique();
      table.timestamps(true, true);
    }),

    knex.schema.createTable('beer', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('style');
      table.string('size');
      table.string('abv');
      table.integer('brewery_id').unsigned();
      table.foreign('brewery_id').references('brewery.id');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('beer'),
    knex.schema.dropTable('brewery')
  ]);
};
