import { atom } from 'recoil'
import loginInfo from '../type/loginInfo'

export const userState = atom<loginInfo | null>({
  key: 'user',
  default: null,
})
