import { executionAsyncResource } from "async_hooks";
import Usuario from "../../domain/Usuario";
import UsuarioRepository from "../../domain/usuario.repository";
import executeQuery from "../../../context/postgress.connector";
import { resourceUsage } from "process";

export default class UsuarioPostgresSQL implements UsuarioRepository {
    async registro(usuario: Usuario): Promise<Usuario> {
        const {nombre, apellidos, email, pass} = usuario;

        const query = `insert into usuario (nombre, apellidos, email, pass) values ('${nombre}','${apellidos}','${email}','${pass}') returning *`;

        const rows: any[] = await executeQuery(query);

        const usuarioDB = {
            nombre: rows[0].nombre,
            apellidos: rows[0].apellidos,
            email: rows[0].email,
            pass: rows[0].pass
        }

        return usuarioDB;
    }
    login(usuario: Usuario): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
}