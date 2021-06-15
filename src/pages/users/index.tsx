import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { useState, useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Box, Button, CardActions, CardContent, Typography, Card } from '@material-ui/core'

export const User: React.FC<any> = () => {
  const notes: Note[] = []
  const [imageURL, setImageURL] = useState("")
  const [name, setName] = useState("")
  const [university, setUniversity] = useState("")
  const [department, setDepartment] = useState("")
  const [graduationYear, setGraduationYear] = useState("")
  const [noteList, setNoteList] = useState(notes)


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

  type Note = {
    enterprise: string;
    job_start_date: string;
    job_end_date: string;
    title: string;
  };

  const NoteComponent = (props: Note) => (
    <Card variant="outlined" className={classes.note}>
    <React.Fragment>
      <CardContent>
        <Typography>{props.enterprise}</Typography>
        <Typography>{props.job_start_date}~{props.job_end_date}</Typography>
      </CardContent>
      <CardActions>
        <a>{props.title}</a>
      </CardActions>
    </React.Fragment>
    </Card>
  )

  
  useEffect(() => {
    setImageURL('https://avatars.githubusercontent.com/u/42636694?v=4')
    setName("名前名前")
    setDepartment("学部")
    setGraduationYear("100卒")
    setUniversity("大学名")
    setNoteList(notes)
  }, [])
  const classes = useStyles()
  return (
    <Grid container spacing={4} justify="center">
      <Grid item xs={2}>
        <Avatar alt="User Image" src={imageURL} className={classes.image} />
      </Grid>
      <Grid item xs={6}>
        <h2>{name}</h2>
        <p>
          {university}
          <br />
          {department}
          <br />
          {graduationYear}
          <br />
        </p>
      </Grid>
      <Box m={4}>
        <h4>投稿したインターン体験記</h4>
        {noteList.map(list => (
          <NoteComponent enterprise={list.enterprise} job_start_date={list.job_start_date} job_end_date={list.job_end_date} title={list.title}/>
        ))}
      </Box>
    </Grid>
  )
}
