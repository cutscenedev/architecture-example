import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import { Config } from '../config'

class JSONPlaceholderApi {
  private readonly client: AxiosInstance

  constructor(private readonly config: Config) {
    this.client = axios.create({
      baseURL: config.JSONPlaceholderApiUrl,
    })
  }

  async request<ResponseData = any>(config: AxiosRequestConfig) {
    return this.client.request<ResponseData>(config)
  }
}

export default JSONPlaceholderApi
