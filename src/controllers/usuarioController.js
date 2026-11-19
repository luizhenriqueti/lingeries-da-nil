import { 
    listarUsuariosService,
    cadastrarUsuarioService,
    buscarPorIdService
 } from "../services/usuarioService.js";

export function listarUsuariosController(req, res) {
    const usuarios = listarUsuariosService();

    res.status(200).json(usuarios);
}

export function cadastrarUsuarioController(req, res) {
    const {nome, idade} = req.body

    if(!nome || !Number.isInteger(idade) || idade < 18) {
        return res.status(400).json({
            mensagem: "Informe nome e idade valida (18 anos ou mais)"
        })
    }

    const usuario = cadastrarUsuarioService(nome, idade)

    return res.status(201).json(usuario)
}

export function buscarPorIdController(req, res) {
    const id = Number(req.params.id)

    if(!id || id === null || !Number.isInteger(id)){
        return res.status(400).json({
            mensagem: "Não pode ser vazio ou nulo e deve ser um numero inteiro"
        })
    }

    const usuario = buscarPorIdService(id)

    return res.status(200).json(usuario)
}
