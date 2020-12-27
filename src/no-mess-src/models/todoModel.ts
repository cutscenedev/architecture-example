import TodoDto from '../dtos/todoDto';

class TodoModel {
  id: number
  title: string
  completed: boolean

  constructor(
    todo: TodoDto,
  ) {
    this.id = todo.id
    this.title = todo.title
    this.completed = todo.completed
  }
}

export default TodoModel
