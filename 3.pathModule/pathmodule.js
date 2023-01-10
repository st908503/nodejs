import path from 'path';

console.log(path.dirname('/Users/shashanktripathi/Desktop/MERN/proj1/async.js'));
console.log(path.extname('/Users/shashanktripathi/Desktop/MERN/proj1/async.js')); //extension of that file

console.log(path.basename('/Users/shashanktripathi/Desktop/MERN/proj1/async.js')); // file name

// to get above all things together as an object
console.log(path.parse('/Users/shashanktripathi/Desktop/MERN/proj1/async.js'));

// or pull specific property
console.log(path.parse('/Users/shashanktripathi/Desktop/MERN/proj1/async.js').root);
