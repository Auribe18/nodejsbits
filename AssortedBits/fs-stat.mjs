import fs from 'node:fs';

const stats = fs.statSync('./archivo.txt');

console.log(
    'Tamaño:', stats.size, 'bytes',
    'Creado:', stats.birthtime,
    'Modificado:', stats.mtime,
    'Es archivo:', stats.isFile(),
    'Es directorio:', stats.isDirectory()
)
