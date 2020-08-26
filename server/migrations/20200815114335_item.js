exports.up = function(knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id');
        table.string('title');
        table.string('long_description', 1000);
        table.string('short_description');
        table.string('images');
        table.decimal('price');
        table.decimal('discount');
        table.integer('quantities');
        table.integer('sizes');
        table.string('colors');
        table.string('gendre');
        table.timestamps();
    })
      
};

exports.down = function(knex) {
    return knex.schema.dropTable("items")
};
