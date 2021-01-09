import React from 'react'
import ReactDOM from 'react-dom'

import App from './view/App'
import DependencyContainer from './dependency/dependencyContainer'
import { DependencyContextProvider } from './dependency/dependencyContext'

const dependencyContainer = new DependencyContainer()

// pre initial-render init

ReactDOM.render(
  <React.StrictMode>
    <DependencyContextProvider value={dependencyContainer}>
      <App />
    </DependencyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
