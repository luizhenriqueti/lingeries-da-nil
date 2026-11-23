import {
    listarTodosService
} from "../services/produtoService.js"

export function listarTodosController(req, res) {
    const produtos = listarTodosService()

    return res.status(200).json(produtos)
}