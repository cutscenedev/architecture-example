import axios, { AxiosInstance } from 'axios'

class JsonPlaceholderApi {
  readonly client: AxiosInstance = axios.create({
    url: 'https://jsonplaceholder.typicode.com',
  })
}

export default JsonPlaceholderApi
