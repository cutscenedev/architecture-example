import { useEffect } from 'react'

import DependencyContainer from './dependency/dependencyContainer'
import { DependencyContextProvider } from './dependency/dependencyContext'
import Modaller from './view/modaller/Modaller'
import Router from './view/router/Router'
import Notifier from './view/notifier/Notifier'

const dependencyContainer = new DependencyContainer()

function App() {
  useEffect(() => {

  }, [])

  return (
    <DependencyContextProvider value={dependencyContainer}>
      <Notifier />
      <Router />
      <Modaller />
    </DependencyContextProvider>
  )
}

export default App
