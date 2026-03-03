import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router'
import { useNavigate, useOutletContext } from "react-router"

function App() {
  const [usuario, setUsuario] = useState({email: "a@a.a", pswd: 123})
  const nav = useNavigate();

  return (
    <>
      <nav>
        <span>App</span>
        <br/>
        <button onClick={() => nav("/tareas")}>Tareas</button>
        <br/>
        <button onClick={() => nav("/registro")}>registrarse</button>
      </nav>
      <Outlet context={[usuario,setUsuario]}/>
    </>
  )
}

export default App
