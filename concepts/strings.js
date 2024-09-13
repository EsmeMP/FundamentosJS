//Hi! I'm Esme and I'm from Chiautempan

const name = "Esme";
const city = 'Chiautempan';

// \n salto de linea

console.log("Hi! I'm " + name + "\nI'm from " + city);
console.log('Hi! I\'m ' + name + '\nI\'m from ' + city);
//Template literals
console.log(`Hi! I'm ${name}
I'm from  ${city}`);


const message =`Hi! I'm ${name} I'm from  ${city}`;

// Azules son propiedades y morados son metodos
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hi!'));
console.log(message.indexOf("Esme"));
console.log(message.split(' '));
console.log("*-* 🦙".repeat(5));