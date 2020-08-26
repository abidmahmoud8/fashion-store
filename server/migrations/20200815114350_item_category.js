exports.up = function(knex) {
    return knex.schema.createTable('item_category', table => {
        table.increments('id');
        table.integer('item_id').notNullable().unsigned().references('id').inTable('items').onDelete('CASCADE').index();
        table.integer('category_id').notNullable().unsigned().references('id').inTable('categories').onDelete('CASCADE').index();;
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("item_category")
  };
  