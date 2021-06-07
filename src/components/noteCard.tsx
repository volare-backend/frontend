import React from 'react'
import { Box, makeStyles, Theme, Typography, Avatar, Card, Chip, CardContent, Grid } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import Image from 'next/image'
import { Note as NoteModel } from '../models'
import { formatYMD } from '../utils/date'

const useStyles = makeStyles((theme: Theme) => ({
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  content: {
    // NOTE(Nakajima 2021/5/17): Only Chrome and Safari Available
    display: '-webkit-box',
    '-webkit-line-clamp': 5,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  userName: {
    fontWeight: 'bold',
  },
}))

const NoteCard: React.VFC<{ note: NoteModel }> = ({ note }: { note: NoteModel }) => {
  const classes = useStyles()

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" mt={3}>
          <Avatar>
            <Image src={note.company.logo} width={50} height={50} alt={note.company.name} />
          </Avatar>
          <Box ml={1}>
            <Typography variant="subtitle1" className={classes.companyName}>
              {note.company.name}
            </Typography>
          </Box>
        </Box>

        <Box mt={2}>
          <Image src={note.images[0]} width={300} height={200} alt={note.title} objectFit="cover" layout="responsive" />
        </Box>
        <Box display="flex" alignItems="center" mt={1} justifyContent="space-between" justifyItems="center">
          <Box display="inline-block">
            <Typography variant="body1">
              {formatYMD(note.period.start)} - {formatYMD(note.period.finish)}
            </Typography>
          </Box>
          <Rating
            defaultValue={(note.evaluation.mentorSupport + note.evaluation.enjoyment + note.evaluation.growth) / 3}
            precision={0.5}
            readOnly
          />
        </Box>

        <Box mt={1}>
          <Chip label={note.position} />
        </Box>
        <Box mt={1}>
          <Typography variant="h1" className={classes.title}>
            {note.title}
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography variant={'body1'} className={classes.content}>
            {note.content}
          </Typography>
        </Box>

        <Box display="flex" justifyItems="center" mt={2}>
          <Avatar>
            <Image src={note.author.thumbnail} width={50} height={50} alt={note.author.name} />
          </Avatar>
          <Box ml={1}>
            <Typography variant="body1" gutterBottom>
              {note.gradeAtTheTime}
            </Typography>
            <Typography variant="body1" className={classes.userName}>
              {note.author.name}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default NoteCard
