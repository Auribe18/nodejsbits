import fs from 'node:fs';

console.log('Leyendo archivo 1...');
const text = fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log(data);
    console.log('Archivo leído');
});


console.log('Leyendo archivo 2...');
const text2 = fs.readFile('./archivo2.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log(data);
    console.log('Archivo leído');
});

