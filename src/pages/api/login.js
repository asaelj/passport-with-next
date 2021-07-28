import passport from 'passport'
import nextConnect from 'next-connect'
import { localStrategy } from '../../lib/passport-strategy'
import { setLoginSession } from '../../lib/auth'

const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })(req, res)
  })

passport.use(localStrategy)

export default nextConnect()
  .use(passport.initialize())
  .post(async (req, res) => {
    try {
      const user = await authenticate('local', req, res)
      const session = { ...user }
      await setLoginSession(res, session)

      res.status(200).send({ done: true, user })
    } catch (error) {
      console.error(error)
      res.status(401).send(error.message)
    }
  })
