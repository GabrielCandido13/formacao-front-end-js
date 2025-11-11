// 1 - Arrays
const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);

const itens = ["Gabriel", true, 2, 3.14, []];
console.log(itens);

// 2 - Mais sobre Arrays
const arr = ["a", "b", "c", "d", "e"];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[83]);

// 3 - Propriedades
const numbers = [5, 3, 4];
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Gabriel";
console.log(myName.length);

// 4 - Métodos
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const text = "algum texto";
console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));

// 5 - Objetos
const person = {
    name: "Gabriel",
    age: 22,
    job: "IT Support"
}
console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof(person));

// 6 - Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "BMW",
    model: "X6",
    km: 20000
}
console.log(car);
car.doors = 4
console.log(car);
delete car.km;
console.log(car);