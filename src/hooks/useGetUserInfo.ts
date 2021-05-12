import { useAsync } from 'react-use'
import { API_ROOT } from '../env'

interface UserInfo {
  _id: string
  rebatePoints?: number
}

export function useGetUserInfo() {
  return useAsync(async () => {
    const response = await fetch(API_ROOT + '/user-info', {
      credentials: 'include',
    })
    const result: UserInfo = await response.json()
    return result
  }, [])
}
