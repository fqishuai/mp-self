import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from '@/pages/App'
import H5 from '@/pages/H5'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path='/app' element={<App />}></Route>
        <Route path='h5' element={<H5 />}></Route>
      </Routes>
    </BrowserRouter>, container
  )
}
