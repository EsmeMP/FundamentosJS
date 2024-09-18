function createCube(size){
    const arrayA = [];
    const frenteA = '/\\';
    const atrasA = '_\\';

    const arrayB = [];
    const frenteB = '\\/';
    const atrasB = '_/';
    for (let i =0; i < size; i++){
        let fila = ' '.repeat(i);
        fila += frenteA.repeat(size -i);
        fila += atrasA.repeat(size);
        // arrayA.unshift(fila);
        let filaB = ' '.repeat(i)
        filaB += frenteB.repeat(size -i);
        filaB += atrasB.repeat(size);
        // array.unshift(filaB);
        arrayA.unshift(fila);
        arrayA.push(filaB);
    }

    return arrayA.join('\n');
    return arrayB.join('\n');
}

const cube = createCube(3);
console.log(cube);

// Catracter de escape

//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/