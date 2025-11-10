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

// 8 - Valor default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}`;
}
console.log(customGreeting("Gabriel"));
console.log(customGreeting("Gabriel", "Boa tarde"));

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++) {
        console.log(text);
    }
}

repeatText("Não tem argumento, repetirá 2 vezes");
repeatText("Agora repetirá 5 vezes", 5);

// 9 - Closure
function testandoClosure () {
    let text = "Hello World";

    function mostrarTexto(){
        console.log(text);
    }

    mostrarTexto();
}
testandoClosure();

// 10 - Mais sobre closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    }
}

const c1 = multiplicationClosure(10);
console.log(c1);
console.log(c1(5));

// 11 - Recursion
const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar!");
    }
    else {
        const x = n - m;
        console.log(x);

        untilTen(x, m);
    }
}

untilTen(100, 7);
untilTen(5, 7);

function factorial(x) {
    if(x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

const num = 6;
const result = factorial(num);
console.log(`O fatorial de ${num} é ${result}`);