/* eslint-disable */
export type ServiceCreateNoteRequest = {
  note: ServiceNote
}

export type ServiceCreateNoteResponse = {
  note: ServiceNote
}

export type ServiceEnterprise = {
  id: string
  name: string
  image_url: string
  description: string
  homepage: string
}

export type ServiceGetNoteResponse = {
  note: ServiceNote
}

export type ServiceListNotesResponse = {
  note: ServiceNote[]
}

export type ServiceNote = {
  id: string
  user: ServiceUser
  enterprise: ServiceEnterprise
  title: string
  intern_name: string
  position: string
  is_online: boolean
  join_year: number
  wage: number
  job_start_date: string
  job_end_date: string
  is_event: boolean
  mentor_support_score: number
  fun_score: number
  content_score: number
  text: string
  tech: ServiceTech[]
  updated_at: string
  created_at: string
}

export type ServiceProfile = {
  id: string
  work_experience: number
  university: string
  department: string
  graduation_year: string
}

export type ServiceSearchNotesResponse = {
  note: ServiceNote[]
}

export type ServiceTech = {
  id: string
  name: string
  type: number
}

export type ServiceUpdateNoteRequest = {
  note: ServiceNote
}

export type ServiceUser = {
  uid: string
  name: string
  image_url: string
  profile: ServiceProfile
}
