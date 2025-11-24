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