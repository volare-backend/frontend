/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    query?: {
      id?: string
    }

    status: 200
    /** A successful response. */
    resBody: Types.ServiceGetNoteResponse
  }
}
