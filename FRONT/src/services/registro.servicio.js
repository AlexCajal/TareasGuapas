const API = "http://localhost:8080"

const registro = async (usuario) => {
    const respuesta = await fetch(API + "/api/admin/registro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(administrador)
    })
    const data = respuesta.json();
    return data
} 

export {registro};