const tableName = "telegram_message"

exports.up = function (knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.string(`${tableName}_id`).primary()
        table.string("telegram_user_id")
        table.json("message_json")

        table.timestamps()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable(tableName)
}
