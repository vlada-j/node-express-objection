exports.up = (knex, Promise) => {
    return knex.schema.createTable('products', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').nullable();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();

        t.string('name', 'Pera').notNull();
        t.text('decription').nullable();
        t.decimal('price', 6, 2).notNull();
        t.enum('category', ['apparel', 'electronics', 'furniture']).notNull();
    });
};

exports.down = knex => {
    return knex.schema.dropTable('products');
};
