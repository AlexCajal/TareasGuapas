import { useState } from "react";
import { useNavigate } from "react-router";
import { registro } from "../services/registro.servicio";

export default function Registro(){
    const [usuario, setUsuario] = useState({
        nombre:"",
        apellidos:"",
        email:"",
        password:"",
        Condiciones:false
    })
    const [error, setError] = useState();

    function doRegistro(){
                if (usuario.nombre && usuario.apellidos && usuario.email && usuario.password ){
                        nav("/")
                        const asasd = registro(usuario);
                }else{setError("Rellena todos los campos")}
    }

    const nav = useNavigate();
    return(
        <>
            <h1>Registro</h1>
            <label>Nombre:</label>
            <input type="textarea" onChange={
                e => {
                    setUsuario({
                        ...usuario,
                        nombre: e.target.value
                    })
                }
            } 
            ></input>
            <br/><br/>
            <label>Apellidos:</label>
            <input type="textarea" onChange={
                e => {
                    setUsuario({
                        ...usuario,
                        apellidos: e.target.value
                    })
                }
            }></input>
            <br/><br/>
            <label>Email:</label>
            <input type="textarea" onChange={
                e => {
                    setUsuario({
                        ...usuario,
                        email: e.target.value
                    })
                }
            }></input>
            <br/><br/>
            <label>Contraseña:</label>
            <input type="password" onChange={
                e => {
                    setUsuario({
                        ...usuario,
                        password: e.target.value
                    })
                }
            }></input>
            <br/><br/>
            <label>Condiciones:</label>
            <input type="checkbox" onChange={
                e => {
                    setUsuario({
                        ...usuario,
                        Condiciones: e.target.checked
                    })
                }
            }></input>
            <br/><br/>
            <button onClick={doRegistro}>Registrar</button>
            <br/>
            <span>{error}</span>
        </>
    )
    
}