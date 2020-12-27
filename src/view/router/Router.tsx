import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/home/Home'
import Todos from '../pages/todos/Todos'
import Form from '../pages/form/Form'

function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/todos" component={Todos} />
        <Route path="/form" component={Form} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
