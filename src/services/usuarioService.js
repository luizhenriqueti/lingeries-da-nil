const usuarios = [
    { id: 1, nome: "João", idade: 25 },
    { id: 2, nome: "Maria", idade: 30 }
];

export function listarUsuariosService() {
    return usuarios;
}

export function cadastrarUsuarioService(nome,idade) {
    const novoUsuario = {
        id: usuarios.length +1,
        nome: nome,
        idade: idade
    }

    usuarios.push(novoUsuario)

    return novoUsuario;
}

export function buscarPorIdService(id) {
    const usuario = usuarios.find(usuario => usuario.id === id)

    return usuario;
}

export function excluirUsuarioService(id) {
    const indice = usuarios.findIndex(usuario => usuario.id === id)
    if(indice === -1) {
        return null
    }

    const resultado = usuarios.splice(indice, 1)

    return resultado[0];
}