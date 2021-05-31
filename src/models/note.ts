import { Company, InternStyle, Position, User } from '.'
import { EvaluationScore, YMD } from '../types'

export type Note = {
  id: string
  author: User
  authorLevelAtTheTime: string
  title: string
  internName: string
  company: Company
  publishedDate: YMD
  images: string[]
  position: Position
  gradeAtTheTime: string
  hourlyWage: number
  period: { start: YMD; finish: YMD }
  evaluation: { mentorSupport: EvaluationScore; enjoyment: EvaluationScore; growth: EvaluationScore }
  internStyle: InternStyle
  content: string
}

export type Notes = {
  notes: Note[]
  currentPage: number
  totalPages: number
  nextID: string
}
