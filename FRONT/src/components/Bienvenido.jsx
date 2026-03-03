import { useNavigate, useOutletContext } from "react-router"

export default function Bienvenido(){

    const [usuario] = useOutletContext()
    const nav = useNavigate();
    
    return (
    <>
        <span>email: {usuario.email}</span>
        <br/>
        <span>Contraseña: {usuario.pswd}</span>
        <br/>
    </>
    )
}