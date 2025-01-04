import type { HttpContext } from '@adonisjs/core/http'
import { registerValidator } from '#validators/auth'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import auth from '@adonisjs/auth/services/main'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)

    // Check for existing user
    const existingUser = await User.findBy({ email: payload.email })
    if (existingUser) {
      return response.conflict({ error: 'Email already exists' })
    }

    const user = await User.create({
      ...payload,
      password: await hash.make(payload.password),
    })

    return response.created({ user: user.serialize() })
  }
}
