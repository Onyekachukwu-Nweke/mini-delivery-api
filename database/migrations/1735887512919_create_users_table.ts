import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('googleId')
      table.string('phoneNumber')
      table.enum('role', ['admin', 'customer', 'courier']).notNullable().defaultTo('customer')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      // table.dropColumn('name')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
