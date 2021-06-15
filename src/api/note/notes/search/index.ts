/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    query?: {
      'note.id'?: string
      'note.user.uid'?: string
      'note.user.name'?: string
      'note.user.image_url'?: string
      'note.user.profile.id'?: string
      'note.user.profile.work_experience'?: number
      'note.user.profile.university'?: string
      'note.user.profile.department'?: string
      'note.user.profile.graduation_year'?: string
      'note.enterprise.id'?: string
      'note.enterprise.name'?: string
      'note.enterprise.image_url'?: string
      'note.enterprise.description'?: string
      'note.enterprise.homepage'?: string
      'note.title'?: string
      'note.intern_name'?: string
      'note.position'?: string
      'note.is_online'?: boolean
      'note.join_year'?: number
      'note.wage'?: number
      'note.job_start_date'?: string
      'note.job_end_date'?: string
      'note.is_event'?: boolean
      'note.mentor_support_score'?: number
      'note.fun_score'?: number
      'note.content_score'?: number
      'note.text'?: string
      'note.updated_at'?: string
      'note.created_at'?: string
    }

    status: 200
    /** A successful response. */
    resBody: Types.ServiceSearchNotesResponse
  }
}
