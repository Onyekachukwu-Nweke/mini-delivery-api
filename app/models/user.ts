import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'

export default class User extends BaseModel {
  static selfAssignPrimaryKey = true
  @column({ isPrimary: true, columnName: 'user_id' })
  declare id: string

  @beforeCreate()
  static assignUuid(user: User) {
    user.id = randomUUID()
  }

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare phoneNumber: string | null

  @column()
  declare googleId: string | null

  @column()
  declare role: 'customer' | 'courier' | 'admin'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  serialize() {
    return {
      user_id: this.id,
      first_name: this.firstName,
      email: this.email,
      last_name: this.lastName,
      phone_number: this.phoneNumber,
      googleId: this.googleId,
      role: this.role,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }
}
