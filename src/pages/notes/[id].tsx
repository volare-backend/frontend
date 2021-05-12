import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { fetchAllNoteIds, fetchNote } from '../../repositories/note'
import { Note as NoteModel } from '../../models'
import { Box, makeStyles, Theme, Typography } from '@material-ui/core'
import { formatYMD } from '../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme: Theme) => ({
  borderTop: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  internName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  period: {
    fontSize: 18,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalEvaluation: {
    '& .title': {
      fontSize: 32,
      fontWeight: 'bold',
    },
    '& .value': {
      fontSize: 52,
      fontWeight: 'bold',
    },
    '& .star': {
      fontSize: 32,
    },
  },
  evaluation: {
    '& .title': {
      fontSize: 18,
      fontWeight: 'bold',
    },
    '& .value': {
      fontSize: 30,
      fontWeight: 'bold',
    },
    '& .star': {
      fontSize: 22,
    },
  },
}))

const Note: React.FC<{ note: NoteModel }> = ({ note }: { note: NoteModel }) => {
  const classes = useStyles()

  const evaluation = (title: string, value: number, isTotal = false) => {
    return (
      <Box textAlign="center" className={isTotal ? classes.totalEvaluation : classes.evaluation}>
        <Typography variant="body1" className="title">
          {title}
        </Typography>
        <Typography variant="body1" className="value">
          {value.toFixed(1)}
        </Typography>
        <Box>
          {Array.from({ length: value }, (_, i) => i).map((i) => (
            <Box display="inline-block" mx="3px" key={i}>
              <FontAwesomeIcon icon={faStar} className="star" color="#FCE34B" />
            </Box>
          ))}
        </Box>
      </Box>
    )
  }

  return (
    <>
      <Head>
        <title>{note.title} | インターン体験記詳細</title>
      </Head>
      <Box maxWidth="90%" mx="auto">
        <Box display="flex" alignItems="center" mt={3}>
          <Image src={note.company.logo} width={50} height={50} alt={note.company.name} />
          <Box ml={1}>
            <Typography variant="subtitle1" className={classes.internName}>
              {note.internName}
            </Typography>
          </Box>
        </Box>
        <Box mt={3}>
          <Typography variant="h1" className={classes.title}>
            {note.title}
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography variant="body1" align="right" className={classes.period}>
            {formatYMD(note.publishedDate)}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={5} pt={8} className={classes.borderTop}>
          <Box flex="50%">
            <Box>
              <Typography variant="h2" gutterBottom className={classes.h2}>
                参加した人
              </Typography>
              <Box display="flex">
                <Image src={note.author.thumbnail} width={50} height={50} alt={note.author.name} />
                <Box ml={1}>
                  <Typography variant="body1" gutterBottom>
                    {note.gradeAtTheTime}
                  </Typography>
                  <Typography variant="body1" className={classes.userName}>
                    {note.author.name}
                  </Typography>
                </Box>
              </Box>
              <Box mt={2}>
                <Typography variant="body2" gutterBottom>
                  {note.author.description}
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="body2">参加時のレベル：{note.authorLevelAtTheTime}</Typography>
              </Box>
            </Box>
            <Box mt={7}>
              <Typography variant="h2" gutterBottom className={classes.h2}>
                インターン情報
              </Typography>
              <Typography variant="body1" gutterBottom>
                開催形式：{note.internStyle.style}
                {note.internStyle.isOnline ? '（オンライン）' : ''}
              </Typography>
              <Typography variant="body1" gutterBottom>
                期間：{formatYMD(note.period.start)} - {formatYMD(note.period.finish)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                ポジション：{note.position}
              </Typography>
              <Typography variant="body1" gutterBottom>
                時給：{note.hourlyWage}円
              </Typography>
            </Box>
          </Box>
          <Box flex="50%" display="flex" flexWrap="wrap" justifyContent="flex-end">
            {note.images.map((image, index) => (
              <Box pl={1} key={image}>
                <Image src={image} width={200} height={200} alt={`image-${index}`} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box mt={10}>
          <Box my={5} textAlign="center">
            {evaluation(
              '総合評価',
              (note.evaluation.mentorSupport + note.evaluation.enjoyment + note.evaluation.growth) / 3,
              true,
            )}
          </Box>

          <Box display="flex" justifyContent="space-evenly">
            <Box my={5}>{evaluation('メンターサポート', note.evaluation.mentorSupport)}</Box>
            <Box my={5}>{evaluation('楽しさ', note.evaluation.enjoyment)}</Box>
            <Box my={5}>{evaluation('成長度', note.evaluation.growth)}</Box>
          </Box>
        </Box>
        <Box my={10} pt={8} className={classes.borderTop}>
          <Typography variant="body1">{note.content}</Typography>
        </Box>
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await fetchAllNoteIds()
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const note = await fetchNote(params?.id as string)
  return { props: { note } }
}

export default Note
