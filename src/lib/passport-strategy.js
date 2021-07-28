/* eslint-disable prefer-arrow-callback */
// import { BasicStrategy } from 'passport-http'
import Local from 'passport-local'
import boom from '@hapi/boom'
import axios from 'axios'

export const localStrategy = new Local.Strategy(async function (
  username,
  password,
  done
) {
  // const user = { username: 'asaelj', token: '12345667889' }
  try {
    const { data, status } = await axios({
      url: 'http://localhost:3010/api/auth/sign-in',
      method: 'post',
      auth: {
        password,
        username
      },
      data: {
        apiKeyToken: process.env.TOKEN
      }
    })

    if (!data || status !== 200) {
      return done(boom.unauthorized(), false)
    }

    // Fecha de login para expirar la cookie
    const user = {
      ...data,
      createdAt: Date.now()
    }
    return done(null, user)
  } catch (error) {
    done(error)
  }
})

// export const strategy = new BasicStrategy(
//   async function (email, password, cb) {
//     try {
//       const { data, status } = await axios({
//         url: 'http://localhost:3010/api/auth/sign-in',
//         method: 'post',
//         auth: {
//           password,
//           username: email
//         },
//         data: {
//           apiKeyToken: '03359578fe9b8720a9df6c0e46c1d1cb2cefa0a77abf2a8e0ad48f90f4dc5112'
//         }
//       })

//       if (!data || status !== 200) {
//         return cb(boom.unauthorized(), 'lol')
//       }

//       return cb(null, 'lol')
//     } catch (error) {
//       cb(error)
//     }
//   })
