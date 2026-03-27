import fs from 'node:fs/promises'; 
import path from 'node:path';

const folder = process.argv[2] ?? './'; 

async function ls (folder) {
    let files
    try {
        files = await fs.readdir(folder);
    } catch (err) {
        console.error('No se pudo leer el directorio ${folder}');
        process.exit(1);
    }

    const filepromises = files.map(async file => {
    const filePath = path.join(folder, file);
    let stats;
    try {
        stats = await fs.stat(filePath);
    } catch (err) {
        console.error('No se pudo obtener la información del archivo ${filePath}:');
        process.exit(1);
    }
    const isDirectory= stats.isDirectory()
    const fileType = isDirectory ? 'd': 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} bytes ${fileModified}`
});

const filesInfo = await Promise.all(filepromises);
filesInfo.forEach(fileinfo => console.log(fileinfo));

}

ls(folder)
    
