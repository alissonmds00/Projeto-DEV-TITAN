//import App from '../app'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
//import { Home } from "./pages/Home"
//import { Login } from "./pages/Login"
//import { Registro } from "./pages/Register"
import { ProdutoADM } from './pages/ProdutoADM'
//import { ProdutoADM } from "./pages/ProdutoADM"

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProdutoADM />
  </React.StrictMode>
)
