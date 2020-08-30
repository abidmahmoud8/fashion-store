exports.up = function(knex) {
    return knex.schema.createTable('commandline', table => {
        table.increments('id');
        table.integer('command_id').notNullable().unsigned().references('id').inTable('command').onDelete('CASCADE').index();
        table.integer('item_id').notNullable().unsigned().references('id').inTable('items').onDelete('CASCADE').index();
        table.string('item_name');
        table.integer('item_price');
        table.integer('item_qte');
        table.integer('item_discount');
        table.integer('item_total_price');
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("commandline")
  };
  