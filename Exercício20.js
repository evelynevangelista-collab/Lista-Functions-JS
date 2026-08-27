function calcularSubtotal(preco, quantidade) {
    let valorSubtotal = preco * quantidade;
    return valorSubtotal;
}

function calcularDesconto(valor, percentual) {
    let valorDesconto = valor * percentual / 100;
     return valor - valorDesconto;
}

function calcularTotal(subtotal, desconto) {
    return(subtotal - desconto);
}

let subtotal = calcularSubtotal(50, 3);
let desconto = calcularDesconto(subtotal, 10);
let total = calcularTotal(subtotal, desconto);

console.log("Subtotal: ", subtotal);
console.log("Desconto: ", desconto);
console.log("Total: ", total);