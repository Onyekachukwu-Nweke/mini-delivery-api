import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class DeliveryRequest extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare customerId: number

  @column()
  declare courierId: number | null

  @column()
  declare pickupLocation: string

  @column()
  declare dropoffLocation: string

  @column()
  declare packageDetails: object // Stores JSON data for package details (e.g., weight, dimensions, description).

  @column()
  declare status: 'pending' | 'in_transit' | 'delivered'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
