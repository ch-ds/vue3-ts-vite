import server from '@/utils/axios'
import { LoginForm } from '@/types'

export function loginApi(params: LoginForm) {
  return server({
    url: '/adminUser/login',
    method: 'post',
    data: params
  })
}