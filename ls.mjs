import fs from 'node:fs';

fs.readdir('./', (err, files) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }
    console.log('Archivos en el directorio:', files);
}); 