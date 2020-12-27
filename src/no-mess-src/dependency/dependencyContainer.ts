import JsonPlaceholderApi from '../api/jsonPlaceholderApi'
import TodosProvider from '../providers/todosProvider'

class DependencyContainer {
  jsonPlaceholderApi: JsonPlaceholderApi
  todosProvider: TodosProvider

  constructor() {
    this.jsonPlaceholderApi = new JsonPlaceholderApi()
    this.todosProvider = new TodosProvider(this.jsonPlaceholderApi)
  }
}

export default DependencyContainer
