import os from "node:os";

console.log('Nombre OS:', os.platform());
console.log('Release:', os.release());
console.log('Arquitectura:', os.arch());
console.log('CPU:', os.cpus());
console.log('Memoria libre:', os.freemem()/1024/1024, 'MB');
console.log('Memoria total:', os.totalmem()/1024/1024, 'MB');
console.log('Uoptime:', os.uptime()/60/60, 'horas');
