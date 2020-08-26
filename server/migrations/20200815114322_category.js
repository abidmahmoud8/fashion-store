exports.up = function(knex) {
    return knex.schema.createTable('categories', table => {
        table.increments('id');
        table.string('name');
        table.integer('level');
        table.integer('parent_id').unsigned().references('id').inTable('categories').onDelete('CASCADE').index();
        table.timestamps();
    })
      
};

exports.down = function(knex) {
    return knex.schema.dropTable("categories")
};