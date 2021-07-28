import useSWR from 'swr'
import axios from 'axios'

export const fetcher = (url) => axios.get(url)
  .then(({ data }) => data)

export function useUser () {
  const { data, mutate } = useSWR('/api/user', fetcher)
  // if data is not defined, the query has not completed
  const loading = !data
  const user = data?.user
  return [user, { mutate, loading }]
}
