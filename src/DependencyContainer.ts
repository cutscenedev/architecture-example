import { config } from './config'
import JSONPlaceholderApi from './apis/JSONPlaceholderApi'
import TodosProvider from './providers/todos/TodosProvider'

class DependencyContainer {
  readonly config = config
  readonly JSONPlaceholderApi = new JSONPlaceholderApi(this.config)
  readonly todosProvider = new TodosProvider(this.JSONPlaceholderApi)
}

export default DependencyContainer
