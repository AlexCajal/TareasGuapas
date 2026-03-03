import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Bienvenido from './components/Bienvenido.jsx'
import Tareas from "./components/Tareas.jsx"
import Registro from "./components/Registro.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path= "/" element={<Bienvenido />}/>
        <Route path= "tareas" element={<Tareas />}/>
        <Route path= "registro" element={<Registro />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
