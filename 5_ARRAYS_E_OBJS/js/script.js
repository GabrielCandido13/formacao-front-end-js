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

// 7 - Mais sobre objetos
const obj = {
    a: "teste",
    b: true
}
console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj);
console.log(obj2);
console.log(obj);

// 8 - Conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - Mutação
const a = {
    name: "Gabriel"
}
const b = a;
console.log(a);
console.log(b);
console.log(a === b);

a.age = 22;
console.log(a);
console.log(b);
delete b.age;
console.log(a);
console.log(b);

// 10 - Loop em array
const users = ["Gabriel", "Matheus", "William", "Lucas", "Cid"];

for(let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

// 11 - Push e Pop
const array = ["a", "b", "c"];

array.push("d");
console.log(array);
console.log(array.length);

array.pop();
console.log(array);
const itemRemovido = array.pop();
console.log(itemRemovido);
console.log(array);

array.push("z", "x", "y");
console.log(array);

// 12 - Shift e Unshift
const letters = ["a", "b", "c"];

const letter = letters.shift();
console.log(letter);
console.log(letters);

letters.unshift("q", "r", "s");
letters.unshift("z");
console.log(letters);

// 13 - indexOf e lastIndexOf
const myElements = ["Morango", "Maça", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maça"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.indexOf("Banana"));
console.log(myElements.lastIndexOf("Mamão"));

// 14 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4+1);
console.log(subArray2);

const subArray3 = testeSlice.slice(2);
console.log(subArray3);

// 15 - Foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
})

const posts = [
    {title: "Primero post", category: "PHP"},
    {title: "Segundo post", category: "Java"},
    {title: "Terceiro post", category: "Python"}
];

posts.forEach((post) => {
    console.log(`Exibindo ${post.title} da categoria ${post.category}.`);
})

// 16 - Includes
const brands = ["BMW", "Ferrari", "Lamborghini", "Ford"];

console.log(brands.includes("BMW"));
console.log(brands.includes("Fiat"));

if(brands.includes("BMW")) {
    console.log("Há carros da marca BMW!")
}

// 17 - Reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();
console.log(reverseTest);

// 18 - Trim
const trimTest = "   testando \n   ";

console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// 19 - Padstart
const testePadStart = "1"; 

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 20 - Split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);
for(let i = 0; i < arrayDaFrase.length; i++){
    console.log(arrayDaFrase[i]);
}

// 21 - Join
const fraseDenovo = arrayDaFrase.join(" ");
console.log(fraseDenovo);

const itemsParaCompra = ["Mouse", "Teclado", "Navaja Crimson Web"];
const fraseDeCompra = `Precisaremos comprar no fim do mês: ${itemsParaCompra.join(", ")}.`;
console.log(fraseDeCompra);