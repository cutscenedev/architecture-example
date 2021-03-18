import JSONPlaceholderApi from '../../apis/JSONPlaceholderApi'
import UserDto from './UserDto'

class UsersProvider {
  constructor(private readonly JSONPlaceholderApi: JSONPlaceholderApi) {}

  async get(id: string): Promise<UserDto> {
    const { data } = await this.JSONPlaceholderApi.request<UserDto>({
      method: 'GET',
      url: '/users',
      data: { id },
    })

    return data
  }
}

export default UsersProvider
