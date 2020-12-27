import TodosProvider from '../providers/todosProvider'
import TodoModel from './todoModel'
import UserModel from './userModel'

class CreatableTodoModel {
  title: string = ''

  constructor(
    private readonly user: UserModel,
    private readonly provider: TodosProvider,
  ) {}

  setTitle(title: string): void {
    this.title = title
  }

  async save(): Promise<TodoModel> {
    return await this.provider.createTodo(this.user, this)
  }
}

export default CreatableTodoModel
