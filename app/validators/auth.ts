import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6),
  })
)

export const registerValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6),
    first_name: vine.string(),
    last_name: vine.string(),
    phone_number: vine.string(),
    role: vine.enum(['customer', 'courier']),
  })
)
