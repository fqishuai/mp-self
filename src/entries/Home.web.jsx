import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from '@/pages/App'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/app' element={<App />}></Route>
    </Routes>
  </BrowserRouter>, document.getElementById('app')
)