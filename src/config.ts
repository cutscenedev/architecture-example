const config = {
  JSONPlaceholderApiUrl: 'https://jsonplaceholder.typicode.com',
} as const

type Config = typeof config

export type { Config }
export { config }
