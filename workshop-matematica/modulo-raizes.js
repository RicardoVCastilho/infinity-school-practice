// Algoritmo para identificar se um número é ímpar ou par
let numero = 18;

console.log(numero % 2 === 0 ? "Par" : "Ímpar");

// Algoritmo para calcular os juros compostos
let capital = 1000;
let taxa = 0.05; // 5% ao mês
let tempo = 6; // 6 meses
let montante = capital * (1 + taxa) ** tempo;

console.log("Montante:", montante.toFixed(2));

// Algoritmo para executar a fórmula do teorema de Pitágoras: A hipotenusa é igual a soma do quadrado dos catetos
let cateto1 = 3;
let cateto2 = 4;
let hipotenusa = Math.sqrt(cateto1**2 + cateto2**2);

console.log("A Hipotenusa é igual a:", hipotenusa);



