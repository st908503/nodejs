import fs from 'fs';

// fs.mkdirSync('thapa');


fs.writeFileSync('thapa/bio.txt', 'Hello' )

fs.appendFileSync('thapa/bio.txt', ' Shashank')


//we can use utf-8 instead of to.string to avoid getting buffer data
// const d = fs.readFileSync('thapa/bio.txt', 'utf-8');
// console.log(d) ;

fs.renameSync('thapa/bio.txt', 'thapa/new.txt')

fs.unlinkSync('thapa/new.txt');

fs.rmdirSync('thapa')






