import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { useState, useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Box, Button, CardActions, CardContent, Typography, Card } from '@material-ui/core'

export const User: React.FC<any> = () => {
  const [imageURL, setImageURL] = useState()
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      image: {
        width: theme.spacing(24),
        height: theme.spacing(24),
        margin: theme.spacing(4),
      },
      note: {
        width: theme.spacing(80),
        height: theme.spacing(20),
      },
    }),
  )

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography>株式会社メルカリ</Typography>
        <Typography>2021/05/01~2021/08/31</Typography>
      </CardContent>
      <CardActions>
        <a>長期就業型インターン</a>
      </CardActions>
    </React.Fragment>
  )

  useEffect(() => {
    setImageURL('https://avatars.githubusercontent.com/u/42636694?v=4')
  }, [])
  const classes = useStyles()
  return (
    <Grid container spacing={4} justify="center">
      <Grid item xs={2}>
        <Avatar alt="User Image" src={imageURL} className={classes.image} />
      </Grid>
      <Grid item xs={6}>
        <h2>Ryota Yamada</h2>
        <p>
          東京工業大学
          <br />
          工学院情報通信系
          <br />
          22卒
          <br />
        </p>
      </Grid>
      <Box m={4}>
        <h4>投稿したインターン体験記</h4>
        <Card variant="outlined" className={classes.note}>
          {card}
        </Card>
        <Card variant="outlined" className={classes.note}>
          {card}
        </Card>
      </Box>
    </Grid>
  )
}
