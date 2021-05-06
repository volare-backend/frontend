import React, { useContext, useEffect } from 'react'
import firebase, { auth } from '../../utils/firebase'
import { AuthContext } from '../../auth/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

const Index: React.FC = () => {
  const { currentUser } = useContext(AuthContext)

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  }

  useEffect(() => {
    //TODO:ログイン成功後の処理
    currentUser && console.log('ログイン成功')
  }, [currentUser])

  return (
    <>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </>
  )
}

export default Index
