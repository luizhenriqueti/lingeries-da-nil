const usuarios = [
    { id: 1, nome: "João", idade: 25 },
    { id: 2, nome: "Maria", idade: 30 }
];

export function listarUsuarios() {
    return usuarios;
}

export function cadastrarUsuario(nome,idade) {
    const novoUsuario = {
        id: usuarios.length +1,
        nome: nome,
        idade: idade
    }

    usuarios.push(novoUsuario)

    return novoUsuario;
}