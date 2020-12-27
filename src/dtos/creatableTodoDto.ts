import CreatableTodoModel from '../models/creatableTodoModel'
import UserModel from '../models/userModel'

class CreatableTodoDto {
  public completed: boolean = false

  constructor(
    public userId: string,
    public title: string,
  ) {}

  static createFromTodoModel(user: UserModel, todo: CreatableTodoModel): CreatableTodoDto {
    return new CreatableTodoDto(user.id, todo.title)
  }
}

export default CreatableTodoDto
