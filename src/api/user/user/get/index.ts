/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    query?: {
      uid?: string
    }

    status: 200
    /** A successful response. */
    resBody: Types.ServiceGetUserResponse
  }
}
