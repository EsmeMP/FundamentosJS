// High Order Functions
// Funciones de orden superior
// Funciones que reciben como
// Parámetros otras funciones

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const calculator = (a, b, callback) => {
    const result = callback(a, b);
    console.log(result);
}

calculator(15, 9, suma);
calculator(15, 9, resta);
calculator(15, 9, (a, b) => a * b);
calculator(15, 9, (a, b) => a / b);

const foods = ['tamales', 'pizza', 'chilaquiles', 'pozole', 'tacos', 'maruchan']
foods.forEach(food => console.log(food));
foods.forEach(food => console.log(food.length));
foods.forEach(food => console.log(food.includes('a')));

const FOODS = foods.map(food=> food.toUpperCase());
console.log(FOODS);

const foodsEmojis = foods.map(food => food + '🍲')
console.log(foodsEmojis);

const sdoof = foods.map(food =>{
    const separated = food.split('');
    const reversed = separated.reverse();
    const joined = reversed.join('');
    return joined;
    // food => food.split('').reverse().join('')
    // se ahorran las llaves y los return
})
console.log(sdoof);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numeros.forEach(numero => console.log(numero));

const numerosCuadrado = numeros.map(numero => numero * numero);
console.log(numerosCuadrado);

const numerosCubo = numeros.map(numero => numero * numero * numero);
console.log(numerosCubo);

const numerosMitades = numeros.map(numero => numero / 2)
console.log(numerosMitades);

// Solucion Profe
const numbers = [1,2,3,4,5,6,7,8,9,10]
const squares = numbers.map(num => num * num);
const cubes = numbers.map(num => Math.pow (num, 3));
const halfs = numbers.map(num => num / 2 );
console.log(squares, cubes, halfs);

function wrappedGifts(gifts){
    return gifts.map(gift =>{
        const tapa = '*'.repeat(gift.length + 2);
        return `${ tapa } \n*${ gift }*\n${ tapa }`
    });
}

const foods = ['tamales', 'pizza', 'chilaquiles', 'pozole', 'tacos', 'maruchan'];
// const wrapeeds = wrappedGifts(foods);
// wrapeeds.forEach(item => console.log(item));

// filter
const containsZ = foods.filter(food => food.includes('z'))
console.log(foods)
console.log(containsZ)

const endsWithS = foods.filter(food => food.endsWith('s'));
console.log(endsWithS);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mayor5 = numeros.filter(num => num > 5);
const menor5 = numeros.filter(num => num < 5);
const pares = numeros.filter(num => num % 2 ===0);
const impares = numeros.filter(num => num % 2 !==0);

console.log(menor5);
console.log(mayor5);
console.log(pares);
console.log(impares);

const numeros = [1,2,3,4,5,6,7,8,9,10];
// reduce

const sumatoria = numeros.reduce((a , b) => a + b);
const factorial = numeros.reduce((a, b) => a * b);
console.log(numeros);
console.log(sumatoria);
console.log(factorial);

// some (or) every(and)
const positivos = numeros.every(n => n > 0);
console.log(positivos);
const negativos = numeros.every(n => n < 0);
console.log(negativos);

const ages = [20, 21, 25, 17, 18];
const algunos_mayores = ages.some(n => n >=18);
console.log(algunos_mayores);
const algunos_menores = ages.some(n => n <=18);
console.log(algunos_menores);

const fruits = ['🥭', '🍈', '🥥', '🫒', '🍍'];

const index_pinneaple = fruits.findIndex(f => f === '🍍');
console.log(fruits[index_pinneaple]);
