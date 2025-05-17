// Algoritmo para validar se uma pessoa é maior de idade (Maior ou igual >=)
let idade = 17;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// Algoritmo para comparar dois números e mostrar o maior (Maior que e menor que > <)
let a = 15;
let b = 22;

if (a > b) {
  console.log("A é maior que B");
} else if (a < b) {
  console.log("B é maior que A");
} else {
  console.log("A e B são iguais");
}

// Algoritmo para validação de senha (Comparação de Valor e tipo ===)
let senhaDigitada = "12345";
let senhaCorreta = "admin123";

if (senhaDigitada === senhaCorreta) {
  console.log("Acesso autorizado");
} else {
  console.log("Acesso negado");
}

// Algoritmo de comparação com um intervalo
let temperatura = 22;

if (temperatura >= 20 && temperatura <= 25) {
  console.log("Temperatura ideal");
} else {
  console.log("Fora da faixa ideal");
}
