// @ts-ignore
import { User } from 'firebase/auth/dist/index.esm'
import React, { createContext, useEffect, useState } from 'react'

import { auth } from '../utils/firebase'
import { JSX } from '@babel/types'
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil'
import { userState } from '../atom/userInfoAtom'

type AuthContextProps = {
  currentUser: User | null | undefined
}

type Props = {
  children: JSX.Element
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const Auth: React.VFC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(undefined)

  const setUserInfo: SetterOrUpdater<User> = useSetRecoilState(userState)

  const userInfoValue: User = useRecoilValue(userState)

  useEffect(() => {
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setUserInfo({
        uid: user ? user.uid : undefined,
        isSignIn: !!user,
        name: user ? user.displayName : undefined,
        thumbnail: user ? user.photoURL : undefined,
      })
    })
    console.log({ userInfo: userInfoValue })
  }, [])

  /* 下階層のコンポーネントをラップする */
  return <AuthContext.Provider value={{ currentUser: currentUser }}>{children}</AuthContext.Provider>
}

export { AuthContext, Auth }
