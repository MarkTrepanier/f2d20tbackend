exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.timestamps(false, true)
    })
    .createTable("pages", (pages) => {
      pages.increments("page_id");
      pages.string("header", 1500)
      pages.string("text", 1500).notNullable();
      pages
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("options", (options) => {
      options.increments("option_id");
      options.string("text", 60).notNullable();
      options.string("link_id", 120).notNullable();//link to next page_id
      options
        .integer("page_id")
        .unsigned()
        .notNullable()
        .references("page_id")
        .inTable("pages")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('options').dropTableIfExists('pages').dropTableIfExists('users')
}
