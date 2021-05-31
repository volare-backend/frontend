import React, { useEffect, useState } from 'react'
import { Box, makeStyles, Theme, Grid, Typography, Tabs, Tab, Container } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { Notes as NotesModel, Tech } from '../models'
import { GetStaticProps } from 'next'
import { fetchAllNotes } from '../repositories/note'
import { fetchTechsAndCompanies } from '../repositories/tech'
import NoteCard from '../components/noteCard'
import { SearchArea } from '../components/searchArea'

const useStyles = makeStyles((theme: Theme) => ({
  currentNumber: {
    fontSize: 25,
  },
  order: {
    fontSize: 18,
  },
}))

const Home: React.VFC<{ notes: NotesModel }> = ({ notes }: { notes: NotesModel }) => {
  const classes = useStyles()
  const notePerPage = 6
  const [order, setOrder] = useState(0)
  const [techs, setTechs] = useState<Tech[]>([])
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleOrderChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setOrder(newValue)
  }

  useEffect(() => {
    const f = async () => {
      const t = await fetchTechsAndCompanies()
      setTechs(t)
    }
    f()
  }, [])

  return (
    <Container component="main" maxWidth="lg">
      <Grid container spacing={4}>
        {/*検索*/}
        <Grid item xs={4}>
          <SearchArea techs={techs} />
        </Grid>

        {/*コンテンツ*/}
        <Grid item xs={8}>
          <Box>
            {/*件数表示/並び替え*/}
            <Box display="flex" justifyContent="space-between">
              <Typography
                variant="subtitle1"
                className={classes.currentNumber}
              >{`${notes.currentPage}/${notes.totalPages}件表示`}</Typography>

              <Box display="flex">
                <Typography variant="subtitle1" className={classes.order}>
                  並び替え
                </Typography>
                <Tabs
                  value={order}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={handleOrderChange}
                  aria-label="disabled tabs example"
                >
                  <Tab label="評価" />
                  <Tab label="新着" />
                </Tabs>
              </Box>
            </Box>

            {/*一覧*/}
            <Box mt={2}>
              <Grid container spacing={2}>
                {notes.notes.map((note) => (
                  <Grid item xs={6} key={note.id}>
                    <NoteCard note={note} />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box textAlign="center" my={3}>
              <Box display="inline-block">
                <Pagination count={Math.ceil(notes.currentPage / notePerPage)} color="primary" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const notes = await fetchAllNotes()
  return { props: { notes } }
}

export default Home
