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

// 8 - Métodos na função construtora
Cachorro.prototype.uivar = function() {
    console.log("Auuuuuu");
};

console.log(Cachorro.prototype);

amorinha.uivar();

// 9 - Classes ES6
class CachorroClase {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    };
};

const ozzy = new CachorroClase("Ozzy", "Shitzu");
console.log(ozzy);

// 10 - Mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    };

    descreverCaminhao() {
        console.log(`O caminhão possui ao total ${this.eixos} eixos e é da cor ${this.cor}.`);
    };
};

const scania = new Caminhao(4, "branco");
console.log(scania);
scania.descreverCaminhao();

Caminhao.prototype.motor = 4.0;
console.log(scania.motor);

// 11 - Override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };
};

const gabriel = new Humano("Gabriel", 22);
console.log(gabriel);

Humano.prototype.idade = "Não definida";
console.log(Humano.prototype.idade);
console.log(gabriel.idade);

// 12 - Symbol
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;  
    };
};

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype.asas = 2;
Aviao.prototype.pilotos = 3;

const boeing = new Aviao("Boeing", 10);
console.log(boeing);
console.log(boeing.asas);
console.log(boeing.pilotos);

// 13 - Getters and Setters

class Post {
    constructor(title, description, tags) {
        this.title = title;
        this.description = description;
        this.tags = tags;
    };

    get exibirTitulo() {
        return `Você está lendo ${this.title}`;
    };

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    };
};

const eldenRing = new Post("Elden Ring is the GOTY of 2022", "The most greatest souls-like of all time");
console.log(eldenRing);
console.log(eldenRing.exibirTitulo);

eldenRing.adicionarTags = "games, soulslike, goty";
console.log(eldenRing);

// 14 - Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas);
        this.nome = nome;
    };
};

const shark = new Lobo(4, "Shark");
console.log(shark);
console.log(shark.patas);

// 15 - Instanceof
console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4, "teste") instanceof Mamifero);
console.log(new Post("a", "b") instanceof Cachorro);
