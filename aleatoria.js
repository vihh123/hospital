const nomes = ["Fabiane", "Marcia", "Danielly", "Gabriel", "Amanda", "Guilherme", "Yohana"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
