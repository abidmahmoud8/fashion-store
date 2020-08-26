exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('first_name');
        table.string('lastname_name');
        table.string('email').unique();
        table.string('password');
        table.timestamps();
    })
      
};

exports.down = function(knex) {
    return knex.schema.dropTable("users")
};
  