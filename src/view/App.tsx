import { useEffect } from 'react'

import Modaller from './modaller/Modaller'
import Router from './router/Router'
import Notifier from './notifier/Notifier'
import useDependency from './hooks/useDependency'

function App() {
  const { } = useDependency()

  useEffect(() => {
    // post initial-render init
  }, [])

  return (
    <div id="app">
      <Notifier />
      <Router />
      <Modaller />
    </div>
  )
}

export default App
