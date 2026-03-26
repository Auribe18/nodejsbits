import fs from 'node:fs/promises';
//en módulos nativos que no tienen promesas, se puede usar el módulo promisify para convertir funciones callback en promesas. Por ejemplo:
// const {promisify} = require('node:util');
// const readFileAsync = promisify(fs.readFile);
// readFileAsync('./archivo.txt', 'utf-8')
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

console.log('Leyendo archivo 1...');
fs.readFile('./archivo.txt', 'utf-8')
    .then(data => {
        console.log('Archivo 1:', data);
        console.log('Archivo leído');
    })
    .catch(err => {
        console.error('Error al leer el archivo:', err);
    });

console.log('Leyendo archivo 2...');
fs.readFile('./archivo2.txt', 'utf-8')
    .then(data => {
        console.log('Archivo 2:', data);
        console.log('Archivo leído');
    })
    .catch(err => {
        console.error('Error al leer el archivo:', err);
    });