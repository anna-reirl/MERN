import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import 'materialize-css'
import { userRoutes } from './routes'

function App() {
  const routes = userRoutes(true)
  return (
    <Router>
      <div className="container">
         {routes}
      </div>
    </Router>
  )
}

export default App
