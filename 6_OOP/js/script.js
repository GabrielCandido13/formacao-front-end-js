// 1 - Métodos
const animal = {
    nome: "Kiara",
    latir: function() {
        console.log("Au au");
    }
};
console.log(animal.nome);
animal.latir();

// 2 - Aprofundando métodos
const pessoa = {
    nome: "Gabriel",
    getNome: function() {
        return this.nome;
    },
    setNome: function(novoNome) {
        this.nome = novoNome;
    }
}

console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("Emilly");
console.log(pessoa.getNome());

// 3 - Prototype
const text = "asd";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(Object.getPrototypeOf(arr));

// 4 - Mais sobre prototype
const myObject = {
    name: "Gabriel",
    age: 22
};
console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondoObject = Object.create(myObject);
console.log(mySecondoObject);
console.log(mySecondoObject.name);
console.log(Object.getPrototypeOf(mySecondoObject) === myObject);

// 5 - Classes
const cachorro = {
    raca: null,
    patas: 4
};

const lhasa = Object.create(cachorro);
lhasa.raca = "Lhasa Apso";
console.log(lhasa);
console.log(lhasa.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog.raca);
console.log(bulldog.patas);

// 6 - Função como classe - Função construtora
function criarCachorro(nome, raca) {
    const cachorro = {};

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const kiki = criarCachorro("Kiara", "Lhasa Apso");
console.log(kiki);

// 7 - Funções como classe
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const amorinha = new Cachorro("Amora", "Lhasa Apso");
console.log(amorinha);