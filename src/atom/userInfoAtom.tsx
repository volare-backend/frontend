import { atom } from 'recoil'
import User from '../type/User'

export const userState = atom<User | null>({
  key: 'user',
  default: null,
})