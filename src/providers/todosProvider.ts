import JsonPlaceholderApi from '../api/jsonPlaceholderApi';
import TodoDto from '../dtos/todoDto';
import CreatableTodoDto from '../dtos/creatableTodoDto';
import CreatableTodoModel from '../models/creatableTodoModel';
import TodoModel from '../models/todoModel';
import UserModel from '../models/userModel'

class TodosProvider {
  constructor(
    private readonly api: JsonPlaceholderApi,
  ) {}

  async getTodoById(user: UserModel, id: string): Promise<TodoModel> {
    const response = await this.api.client.get<TodoDto>(`/todos/${id}?userId=${user.id}`)

    return new TodoModel(response.data)
  }

  async createTodo(user: UserModel, creatableTodo: CreatableTodoModel) {
    const creatableTodoDto = CreatableTodoDto.createFromTodoModel(user, creatableTodo)

    const response = await this.api.client.post<TodoDto>('/todos', creatableTodoDto)

    return new TodoModel(response.data)
  }
}

export default TodosProvider
