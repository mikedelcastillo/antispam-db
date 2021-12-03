const tableName = "spammer"

exports.up = function (knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.string(`${tableName}_id`).primary()

        table.string("first_name")
        table.string("last_name")
        table.string("address")
        table.string("phone_number")

        table.timestamps()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable(tableName)
}
