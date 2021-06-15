/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './user/delete'
// prettier-ignore
import { Methods as Methods1 } from './user/get'
// prettier-ignore
import { Methods as Methods2 } from './user/update'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/user/delete'
  const PATH1 = '/user/get'
  const PATH2 = '/user/update'
  const GET = 'GET'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    user: {
      delete: {
        /**
         * @returns A successful response.
         */
        delete: (option?: { query?: Methods0['delete']['query'], config?: T }) =>
          fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json(),
        /**
         * @returns A successful response.
         */
        $delete: (option?: { query?: Methods0['delete']['query'], config?: T }) =>
          fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json().then(r => r.body),
        $path: (option?: { method: 'delete'; query: Methods0['delete']['query'] }) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      get: {
        /**
         * @returns A successful response.
         */
        get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * @returns A successful response.
         */
        $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      update: {
        /**
         * @returns A successful response.
         */
        put: (option: { body: Methods2['put']['reqBody'], config?: T }) =>
          fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH2, PUT, option).json(),
        /**
         * @returns A successful response.
         */
        $put: (option: { body: Methods2['put']['reqBody'], config?: T }) =>
          fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH2, PUT, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
