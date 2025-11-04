// 1 - Variáveis
let nome = "Gabriel";
console.log(nome);

nome = "Gabriel Candido";
console.log(nome);

const idade = 22;
console.log(idade);
// idade = 23; - Uma const nao pode ser alterada!

// 2 - Mais sobre variaveis
let a = 10, b = 20, c = 30;
console.log(a, b, c);

const nomecompleto = "Gabriel Candido Sena da Silva";
const nomeCompleto = "Emilly Maria Batista Alves";
console.log(nomecompleto);
console.log(nomeCompleto);

let $nome;
let _nome;

// 3 - Prompt
// const age = prompt("Digite a sua idade");
// console.log(`Você tem ${age} anos.`);

// 4 - Alert
// alert("Testando");

// const z = 10;
// alert(`O numero e ${z}`);

// 5 - Math
console.log(Math.max(5, 2, 1, 10));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

// 6 - Console
console.log("Teste");
console.error("Isto e um erro!");
console.warn("Isto e um aviso!");

// 7 - If
const m = 10;

if (m > 5) {
    console.log("M e maior que 5!");
}

const user = "Gabriel";
if (user === "Gabriel") {
    console.log("Ola Gabriel!");
}

if (user === "Emilly") {
    console.log("Ola Emilly!");
}

console.log(user === "Gabriel", user === "Emilly");

// 8 - Else
const loggedIn = false;
if (loggedIn) {
    console.log("Esta autenticado");
}
else {
    console.log("Nao esta autenticado");
}

const q = 10; const w = 15;
if (q > 10 && w > 15){
    console.log("Numeros mais altos");
}
else {
    console.log("Numeros mais baixos");
}

// 9 - Else if
if (1 > 2) {
    console.log("1 e maior que 2");
} else if (5 > 10) {
    console.log("5 e maior que 10");
} else if (10 < 15) {
    console.log("10 e menor que 15");
}

const userName = "Gabriel";
const userAge = 22;

if(userName === "Jose" && userAge === 30) {
    console.log("Seu nome e Jose e voce tem 30 anos");
} else if (userName === "Gabriel" && userAge === 22) {
    console.log("Seu nome e Gabriel e voce tem 22 anos")
} else {
    console.log("Nao localizamos seu nome e sua idade")
}

// 10 - While
let p = 0;

while(p < 5) {
    console.log(`Valor de p = ${p}`);
    p++;
}

// 11 - Do while
let contador = 10;
do {
    console.log(`Contagem regressiva... ${contador}`);
    contador--;
} while (contador >= 0);

// 12 - For
for (let i = 0; i <= 10; i++) {
    console.log(`Repetindo... ${i}`);
}

for (let i = 10; i >= 0; i--) {
    console.log(`Diminuindo ${i}`);
}

// 13 - Identação
for(let i = 0; i < 10; i++) {
if(i * 2 > 10) {
    console.log("Maior que 10!");
} else if(i / 2 === 0) {
    console.log("Deu 0!");
}
}

// 14 - Break
for(i = 20; i >= 10; i--) {
    console.log(`O valor de i é ${i}`);
    if (i === 12) {
        console.log("O valor é de 12, paramos por aqui!");
        break;
    }
}

// 15 - Continue
for(i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log("Número par!");
        continue;
    }
    console.log(i);
}

// 16 - Switch
const job = "Advogado";

switch(job) {
    case "Programador":
        console.log("Você é um programador!");
        break;
    case "Advogado":
        console.log("Você é um advogado");
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro");
        break;
    default:
        console.log("Profissão não encontrada")
}