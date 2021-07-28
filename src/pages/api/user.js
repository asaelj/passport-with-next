import { getLoginSession } from '../../lib/auth'
export default async function user (req, res) {
  try {
    const session = await getLoginSession(req)

    res.status(200).json({ session })
  } catch (error) {
    console.error(error)
    res.status(500).end('Authentication token is invalid, please log in')
  }
}
