function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de Idade";
    } else {
        return "Menor de Idade";
    }
}

console.log(verificarIdade(14));
console.log(verificarIdade(20));
