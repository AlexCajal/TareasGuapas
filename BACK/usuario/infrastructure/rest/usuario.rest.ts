import Usuario from "../../domain/Usuario";
import UsuarioPostgresSQL from "../db/usuario.repository.postgress";
import UsuarioRepository from "../../domain/usuario.repository";
import UsuarioUseCases from "../../application/usuario.usecases";
import express, { request, Request, Response } from "express";
import { createToken } from "../../../context/security/auth";

const usuarioRepsitory: UsuarioRepository = new UsuarioPostgresSQL();

const usuarioUseCases: UsuarioUseCases = new UsuarioUseCases(
    usuarioRepsitory
)

const router = express.Router();

router.post("/registro", async (request : Request, response: Response) =>{
    const {nombre, apellidos, email, pass} = request.body;

    const userPost = {
        nombre,
        apellidos,
        email,
        pass
    }

    const usuario:Usuario = await usuarioUseCases.registro(userPost);
    const token = createToken(usuario);
    response.status(200).send({
        message: "Registro Correcto",
        token: token
    })
})


export default router;