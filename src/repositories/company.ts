import { Company, Tech } from '../models'

export const fetchCompanies = async (): Promise<Company[]> => {
  // FIXME(Nakajima 2021/05/24): Fetch Data From API
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([...Companies]))
  })
}

const Companies: Company[] = [
  { id: '1', name: 'mercari', logo: 'test.jpg' },
  { id: '2', name: 'CyberAgent', logo: 'test.jpg' },
  { id: '3', name: 'DeNA', logo: 'test.jpg' },
  { id: '4', name: 'AWS', logo: 'test.jpg' },
  { id: '5', name: 'Money Forward', logo: 'test.jpg' },
  { id: '6', name: 'Wantedly', logo: 'test.jpg' },
  { id: '7', name: 'Google', logo: 'test.jpg' },
]
