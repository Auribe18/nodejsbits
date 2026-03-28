import fs from 'node:fs/promises'

Promise.all([
    fs.readFile('./archivo.txt', 'utf-8'),
    fs.readFile('./archivo2.txt', 'utf-8')
])
.then(([data1, data2]) => {
    console.log('Archivo 1:', data1);
    console.log('Archivo 2:', data2);
})
.catch(err => {
    console.error('Error al leer los archivos:', err);
});