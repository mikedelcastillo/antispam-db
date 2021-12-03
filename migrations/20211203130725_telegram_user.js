const tableName = "telegram_user"

exports.up = function (knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.string(`${tableName}_id`).primary()

        table.string("first_name")
        table.string("last_name")
        table.string("username")

        table.boolean("data_approved").defaultsTo("false")
        table.string("data_phone_number")

        table.json("user_json")

        table.timestamps()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable(tableName)
}
