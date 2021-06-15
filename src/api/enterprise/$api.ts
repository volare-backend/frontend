/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './enterprise/create'
// prettier-ignore
import { Methods as Methods1 } from './enterprise/delete'
// prettier-ignore
import { Methods as Methods2 } from './enterprise/get'
// prettier-ignore
import { Methods as Methods3 } from './enterprise/list'
// prettier-ignore
import { Methods as Methods4 } from './enterprise/update'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/enterprise/create'
  const PATH1 = '/enterprise/delete'
  const PATH2 = '/enterprise/get'
  const PATH3 = '/enterprise/list'
  const PATH4 = '/enterprise/update'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    enterprise: {
      create: {
        /**
         * @returns A successful response.
         */
        post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
          fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
        /**
         * @returns A successful response.
         */
        $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
          fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      },
      delete: {
        /**
         * @returns A successful response.
         */
        delete: (option?: { query?: Methods1['delete']['query'], config?: T }) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, PATH1, DELETE, option).json(),
        /**
         * @returns A successful response.
         */
        $delete: (option?: { query?: Methods1['delete']['query'], config?: T }) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, PATH1, DELETE, option).json().then(r => r.body),
        $path: (option?: { method: 'delete'; query: Methods1['delete']['query'] }) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      get: {
        /**
         * @returns A successful response.
         */
        get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
          fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
        /**
         * @returns A successful response.
         */
        $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
          fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      list: {
        /**
         * @returns A successful response.
         */
        get: (option?: { config?: T }) =>
          fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).json(),
        /**
         * @returns A successful response.
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`
      },
      update: {
        /**
         * @returns A successful response.
         */
        put: (option: { body: Methods4['put']['reqBody'], config?: T }) =>
          fetch<Methods4['put']['resBody'], BasicHeaders, Methods4['put']['status']>(prefix, PATH4, PUT, option).json(),
        /**
         * @returns A successful response.
         */
        $put: (option: { body: Methods4['put']['reqBody'], config?: T }) =>
          fetch<Methods4['put']['resBody'], BasicHeaders, Methods4['put']['status']>(prefix, PATH4, PUT, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
