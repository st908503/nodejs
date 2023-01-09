import os from 'os';

console.log(os.arch());
console.log(os.hostname())
console.log(os.platform());
console.log(os.tmpdir())
console.log(os.type())

const free_memory = os.freemem();
console.log(`${free_memory/1024/1024/1024}`);

const total_memory = os.totalmem();
console.log(`${total_memory/1024/1024/1024}`);