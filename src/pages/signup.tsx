import React from 'react'
import Image from 'next/image'
import { TextField, Button, Grid, Container, Link, Box, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase, { auth } from '../utils/firebase'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    borderRadius: '1.5em',
    color: '#F9F8FE',
    backgroundColor: '#4634EE',
    '&:hover': {
      backgroundColor: '#556cd6',
    },
  },
  input: {
    borderRadius: '1em',
    backgroundColor: '#F2F4F8',
  },
  divider: {
    marginTop: theme.spacing(2),
  },
}))

const SignUp: React.FC<any> = () => {
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  }

  const classes = useStyles()

  const DividerWithText = ({ children }) => (
    <Grid container alignItems="center" spacing={3}>
      <Grid item xs>
        <Divider />
      </Grid>
      <Grid item>{children}</Grid>
      <Grid item xs>
        <Divider />
      </Grid>
    </Grid>
  )

  return (
    <>
      <Container component="main" maxWidth="md">
        <h2>アカウントの作成</h2>
        <h4>
          アカウントをお持ちの方 <Link href="#">ログイン</Link>
        </h4>
        <Box display="flex" mt={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="ユーザーネーム"
                    variant="filled"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.input,
                    }}
                    color="primary"
                    fullWidth
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Eメール"
                    variant="filled"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.input,
                    }}
                    color="primary"
                    fullWidth
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="パスワード"
                    variant="filled"
                    InputProps={{
                      disableUnderline: true,
                      className: classes.input,
                    }}
                    color="primary"
                    fullWidth
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button type="submit" size="large" variant="contained" fullWidth className={classes.button}>
                サインアップ
              </Button>
            </form>
            <Box py={2} />
            <DividerWithText>または</DividerWithText>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          </Box>
          <Box ml={8}>
            <Image src={'/signup.svg'} width="800px" height="800px" />
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default SignUp
