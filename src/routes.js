import React from 'react'
import { Switch, Route } from 'react-router-dom'

import A from './A'
import B from './B'

const routes = (
  <Switch>
    <Route exact path='/' component={A} />
    <Route path='/b' component={B} />
  </Switch>
)

export default routes
