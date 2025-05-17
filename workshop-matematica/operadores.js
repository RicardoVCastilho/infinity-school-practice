// Algoritmo da SOMA de itens em um Carrinho de Compras
let item1 = 29.90;
let item2 = 45.90;
let item3 = 15.00;
let total = item1 + item2 + item3;

console.log("O total da compra é: R$", total.toFixed(2));

// Algoritmo de SUBTRAÇÃO em um Saldo Bancário
let saldoInicial = 500.00;
let compra = 120.75;
let saldoFinal = saldoInicial - compra;

console.log("O saldo restante da sua conta é: R$", saldoFinal.toFixed(2));

// Algoritmo do cálculo da distância percorrida (com MULTIPLICAÇÃO)
let velocidade = 60; // Em km/h
let tempo = 1.5;
let distancia = velocidade * tempo;

console.log("Distância percorrida:", distancia, "kms");

// Algoritmo do cálculo da MÉDIA de notas
let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 6.5;
let media = (nota1 + nota2 + nota3) / 3;

console.log("A média final é:", media.toFixed(2));

// Algoritmo de cálculo do troco
// Conversão de tempo: Minutos para Horas e minutos

// Algoritmo lógico com o operador AND
let emailCorreto = true;
let senhaCorreta = true;

if (emailCorreto && senhaCorreta) {
  console.log("Login realizado com sucesso!");
} else {
  console.log("E-mail ou senha incorretos.");
}

// Algoritmo lógico com o operador OR
let estudante = false;
let idadeDoComprador = 65;

if (estudante || idadeDoComprador >= 60) {
  console.log("Tem direito à meia-entrada.");
} else {
  console.log("Precisa pagar entrada inteira.");
}

// Algoritmo lógico com o operador de negaçãO NOT
let campoVazio = false;

if (!campoVazio) {
  console.log("Campo preenchido, prosseguir com login.");
} else {
  console.log("Por favor, preencha o campo.");
}