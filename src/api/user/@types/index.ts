/* eslint-disable */
export type ServiceGetUserResponse = {
  user: ServiceUser
}

export type ServiceProfile = {
  id: string
  work_experience: number
  university: string
  department: string
  graduation_year: string
}

export type ServiceUpdateUserRequest = {
  user: ServiceUser
}

export type ServiceUpdateUserResponse = {
  user: ServiceUser
}

export type ServiceUser = {
  uid: string
  name: string
  image_url: string
  profile: ServiceProfile
}
