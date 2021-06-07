import { Note as NoteModel, Notes as NotesModel } from '../models'

export const fetchAllNoteIds = async (): Promise<{ params: { id: string } }[]> => {
  // FIXME(Kondo 2021/05/11): Fetch Data From API
  return new Promise((resolve, reject) => setTimeout(() => resolve([{ params: { id: '1' } }]), 100))
}

export const fetchNote = async (id: string): Promise<NoteModel> => {
  // FIXME(Kondo 2021/05/11): Fetch Data From API
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve({
          id,
          internStyle: { style: '就業型', isOnline: true },
          author: {
            id: 'thisIsUniqueUserId',
            name: 'つよつよエンジニアりょーた',
            grade: '大学3年生 23卒',
            description:
              'ムームンが好き。Volareの運営メンバーだぜ。すげえだろ。えへん。わーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわーわー',
            thumbnail: '/images/ryota.png',
          },
          authorLevelAtTheTime:
            'レベル100、なんでもできる。なんでもできる。なんでもできる。なんでもできる。なんでもできる。なんでもできる。',
          company: {
            id: 'thisIsUniqueCompanyId',
            name: 'mercari',
            logo: '/images/mercari.png',
          },
          content:
            'Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。Mercariのインターンに参加してきました。とても面白かったぜい。',
          evaluation: { mentorSupport: 5, enjoyment: 5, growth: 5 },
          gradeAtTheTime: '大学3年生 23卒',
          hourlyWage: 99999999999,
          internName: 'mercari summer internship',
          period: { start: { year: 2020, month: 3, date: 1 }, finish: { year: 2020, month: 3, date: 31 } },
          position: 'バックエンド',
          title: 'mercariのインターンでGo Boldになった話',
          images: [
            '/images/book_coffee.jpg',
            '/images/cat.jpg',
            '/images/hedgehog.jpg',
            '/images/santa-cake.jpeg',
            '/images/book_coffee.jpg',
            '/images/cat.jpg',
          ],
          publishedDate: { year: 2020, month: 4, date: 11 },
        }),
      100,
    ),
  )
}

export const fetchAllNotes = async (): Promise<NotesModel> => {
  // FIXME(Nakajima 2021/05/17): Fetch Data From API
  const note = await fetchNote('1')
  const notes = [...Array(6)].map(() => note)
  return { notes: notes, currentPage: 6, totalPages: 100, nextID: 'testtest' }
}
