exports.up = function(knex) {
    return knex.schema.createTable('command', table => {
        table.increments('id');
        table.integer('user_id').notNullable().unsigned().references('id').inTable('users').onDelete('CASCADE').index();
        table.string('status');
        table.decimal('total_price').notNullable();
        table.timestamps();
    })
      
};

exports.down = function(knex) {
    return knex.schema.dropTable("command")
};
  