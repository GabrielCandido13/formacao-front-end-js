// 1 - Criando uma função
function minhaFuncao() {
    console.log('Testando');
}
minhaFuncao();

const minhaFuncaoEmVariavel = function() {
    console.log("Minha função dentro de uma variável!")
}
minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}
funcaoComParametro("Imprimindo alguma coisa!");
funcaoComParametro("Imprimindo outra coisa!");

// 2 - Return
const a = 10;
const b = 20;
const c = 30;
const d = 40;
const e = 50;

function soma(n1, n2) {
    return n1 + n2;
}

const resultadoSoma = soma(c, b);
console.log(resultadoSoma);
console.log(soma(c, d));

// 3 - Escopo da função
let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}

testandoEscopo();
console.log(`Y fora da função é: ${y}`);

// 4 - Escopo aninhado
let m = 10;

function escopoAninhando() {
    let m = 20;

    console.log(m);

    if(true) {
        let m = 30;
        console.log(m);

        if(true) {
            let m = 40;
            console.log(m);
        }
    }

}

console.log(m);
escopoAninhando();

// 5 - Arrow function
const testandoArrow = () => {
    console.log("Isto é uma arrow function");
}
testandoArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log(`${n} é PAR!`);
        return;
    }
    console.log(`${n} é ÍMPAR!`)
}
parOuImpar(2);

// 6 - Mais sobre Arrow functions
const dolar = (x) => x * 5.33;
console.log(dolar(2));

const helloWorld = () => console.log("Hello World");
helloWorld();

// 7 - Parâmetro opcional
const multiplication = (m, n) => {
    if(n === undefined) {
        return m * 2;
    }
    else {
        return m * n;
    }
}
console.log(multiplication(10, 5));
console.log(multiplication(10));

const greeting = (name) => {
    if(!name) {
        console.log("Olá!");
        return;
    }
    
    console.log(`Olá ${name}!`);
}
greeting("Gabriel");
greeting();