import { listarUsuarios } from "../services/usuarioService.js";

export function buscarUsuarios(req, res) {
    const usuarios = listarUsuarios();

    res.status(200).json(usuarios);
}