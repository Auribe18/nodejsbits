import fs from 'node:fs/promises';  

//IIFE - Immediately Invoked Function Expressionm - Es una función anónima autoejecutable
(async() => {
    try {
        console.log('Leyendo archivo 1...');
        const data1 = await fs.readFile('./archivo.txt', 'utf-8');
        console.log('Archivo 1:', data1);
        console.log('Archivo leído');

        console.log('Leyendo archivo 2...');
        const data2 = await fs.readFile('./archivo2.txt', 'utf-8');
        console.log('Archivo 2:', data2);
        console.log('Archivo leído');
    } catch (err) {
        console.error('Error al leer el archivo:', err);
    }
})();