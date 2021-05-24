import { Tech } from '../models'

export const fetchTechsAndCompanies = async (): Promise<Tech[]> => {
  // FIXME(Nakajima 2021/05/24): Fetch Data From API
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([...Languages]))
  })
}

const Languages: Tech[] = [
  { id: '1', name: 'Java', type: 1 },
  { id: '2', name: 'PHP', type: 1 },
  { id: '3', name: 'JavaScript', type: 1 },
  { id: '4', name: 'C', type: 1 },
  { id: '5', name: 'C++', type: 1 },
  { id: '6', name: 'Python', type: 1 },
  { id: '7', name: 'Ruby', type: 1 },
  { id: '8', name: 'Go', type: 1 },
  { id: '9', name: 'Rust', type: 1 },
]
