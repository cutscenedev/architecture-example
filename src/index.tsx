import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// good place for: add polyfills, configure libs, dev environment setup

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
