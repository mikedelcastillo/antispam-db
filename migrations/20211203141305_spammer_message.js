const tableName = "spammer_message"

exports.up = function (knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments(`${tableName}_id`).primary()

        table.string("spammer_id")
        table.string("telegram_user_id")
        
        table.text("tesseract_tsv", "longtext")
        table.text("tesseract_txt", "longtext")

        table.string("file_id")
        table.string("file_path")

        table.timestamps()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable(tableName)
}
