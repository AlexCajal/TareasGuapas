import Usuario from "../domain/Usuario";
import UsuarioRepository from "../domain/usuario.repository";
import { error } from "console";
import { hash } from "../../context/security/encrypter"
import bcrypt from "bcrypt";

export default class UsuarioUseCases{
    constructor(private usuarioRepository:UsuarioRepository) { }

    async registro(usuario: Usuario): Promise<Usuario>{
    if(!usuario.pass) throw error("No pass");

    const passCifrada = hash(usuario.pass);
    usuario.pass = passCifrada;

    return this.usuarioRepository.registro(usuario);

    } 
}