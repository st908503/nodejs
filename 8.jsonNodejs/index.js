const fs = require('fs')

const me = {
    name: 'shashank',
    age: 24,
    country: "India"
}

// //object to jso
// const jsonData = JSON.stringify(me);
// console.log(jsonData);

// //json to object
// const objData = JSON.parse(jsonData)
// console.log(objData);

// task-
// convert to JSON
// add to another File
// readfile
// again convert back to js object
// console.log()

// const jsonData = JSON.stringify(me);
// fs.writeFile('read.json', jsonData, (err,data)=>{
//     console.log('data written')
// })

fs.readFile('read.json', 'utf-8', (err,data)=>{

const originalData = JSON.parse(data);
console.log(data)
console.log(originalData)
});

// {"name":"shashank","age":24,"country":"India"}
// { name: 'shashank', age: 24, country: 'India' }