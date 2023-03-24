exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable("dealer", (table) => {
    table.increments("id");
    table.string("vin").notNullable().unique();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table.decimal("mileage").notNullable();
    table.string("title");
    table.string("transmission");
  });
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists("dealer");
};
