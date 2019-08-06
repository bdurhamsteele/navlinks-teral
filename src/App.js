import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import Teral from './Teral'
import './App.css'

let App = () => (
  <div className='App'>
    <Teral />
    <Router>{routes}</Router>
  </div>
)

export default App
