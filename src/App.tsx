import React from 'react'

import DependencyContainer from './DependencyContainer'
import { DependencyContextProvider } from './view/contexts/dependencyContext'
import Modaller from './view/modaller/Modaller'
import Notifier from './view/notifier/Notifier'
import Router from './view/router/Router'

const dependencyContainer = new DependencyContainer()

function App() {
  return (
    <div id="app">
      <DependencyContextProvider value={dependencyContainer}>
        <Notifier />
        <Router />
        <Modaller />
      </DependencyContextProvider>
    </div>
  )
}

export default App
