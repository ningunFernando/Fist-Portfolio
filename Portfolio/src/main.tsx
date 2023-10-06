import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
        <AppRouter/>
     </BrowserRouter>
     <Footer/>
  </React.StrictMode>,
)
