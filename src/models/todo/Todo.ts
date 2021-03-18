import { makeAutoObservable } from 'mobx'

class Todo {
  completed = false

  constructor(readonly name: string) {
    makeAutoObservable(this)
  }

  complete() {
    this.completed = true
  }
}

export default Todo
