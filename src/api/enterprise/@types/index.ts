/* eslint-disable */
export type ServiceCreateEnterpriseRequest = {
  enterprise: ServiceEnterprise
}

export type ServiceEnterprise = {
  id: string
  name: string
  image_url: string
  description: string
  homepage: string
}

export type ServiceGetEnterpriseResponse = {
  enterprise: ServiceEnterprise
}

export type ServiceListAllEnterprisesResponse = {
  enterprise: ServiceEnterprise[]
}

export type ServiceUpdateEnterpriseRequest = {
  enterprise: ServiceEnterprise
}
