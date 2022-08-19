//import App from '../app'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Home } from "./pages/Home"
//import { Login } from "./pages/Login"
//import { Register } from "./pages/Register"

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
