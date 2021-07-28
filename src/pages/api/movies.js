import axios from 'axios'
import { getLoginSession } from '../../lib/auth'

export default async function movies (req, res) {
  try {
    const { token } = await getLoginSession(req)
    const { data } = await axios({
      url: 'http://localhost:3010/api/movies',
      headers: { Authorization: `Bearer ${token}` },
      method: 'get'
    })
    res.status(200).json({ data })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
