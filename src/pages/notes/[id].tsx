import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { fetchAllNoteIds, fetchNote } from '../../repositories/note'
import { Note } from '../../models'

const Note: React.FC<{ note: Note }> = ({ note }: { note: Note }) => {
  return (
    <>
      <Head>
        <title>インターン体験記詳細</title>
      </Head>
      <div>
        <p>{note.id}</p>
      </div>
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
