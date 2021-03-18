import JSONPlaceholderApi from '../../apis/JSONPlaceholderApi'
import TodoDto from './TodoDto'

class TodosProvider {
  constructor(private readonly JSONPlaceholderApi: JSONPlaceholderApi) {}

  async save(name: string, completed: string): Promise<TodoDto> {
    const { data } = await this.JSONPlaceholderApi.request<TodoDto>({
      method: 'POST',
      url: '/todos',
      data: { name, completed },
    })

    return data
  }
}

export default TodosProvider
