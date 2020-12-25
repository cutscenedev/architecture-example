import { useEffect } from 'react'

import DependencyContainer from './dependency/dependencyContainer'
import { DependencyContextProvider } from './dependency/dependencyContext'

const dependencyContainer = new DependencyContainer()

function App() {
  useEffect(() => {

  }, [])

  return (
    <DependencyContextProvider value={dependencyContainer}>

    </DependencyContextProvider>
  )
}

export default App
