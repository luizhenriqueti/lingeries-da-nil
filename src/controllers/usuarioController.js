import { cadastrarUsuario, listarUsuarios } from "../services/usuarioService.js";

export function buscarUsuarios(req, res) {
    const usuarios = listarUsuarios();

    res.status(200).json(usuarios);
}

export function criaUsuario(req, res) {
    const {nome, idade} = req.body

    if(!nome || !Number.isInteger(idade) || idade < 18) {
        return res.status(400).json({
            mensagem: "Informe nome e idade valida (18 anos ou mais)"
        })
    }

    const usuario = cadastrarUsuario(nome, idade)

    return res.status(201).json(usuario)
}

