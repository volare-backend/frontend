import React, { useContext, useEffect } from 'react'
import Router from 'next/router'
import firebase, { auth } from '../../utils/firebase'
import { AuthContext } from '../../auth/auth'

const Index: React.FC = () => {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    currentUser && console.log('ログイン成功')
  }, [currentUser])

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithRedirect(provider)
  }

  return (
    <>
      <button onClick={login}>googleでログインする</button>
    </>
  )
}

export default Index
