/*
streams are objects that let you read data from a source or write data to a destination in continous fashion
In node js there are 4 types of streams:
1-Readable- used to read
2-Writable- used to read
3-Duplex- used to read and write both
4-Transform- type of duplex stream where output is computed based on input
*/

/*
each type of stream is an eventemitter instance and throws several events at different instance of Times.
Some commonly used events are data, end, error, finish
*/


//1st way


const fs = require('fs');
const http = require('http');


const server = http.createServer();

server.on('request', (req,res)=>{
//    fs.readFile('input.txt', (err, data)=>{
//     if(err) return console.log(err);
//     res.end(data.toString());
//    });
// });



//in above way we havent done streaming. Its the old way.


/*
2nd way
reading from a stream
create a readable stream
handle stream events -> data, end and error
*/

//const readable_stream = fs.createReadStream('input.txt');

// readable_stream.on('data', (chunkdata)=>{
//     res.write(chunkdata);
// })
// readable_stream.on('end', ()=>{
//     res.end();
// })
// readable_stream.on('error', (err)=>{
//     console.log(err);
//     res.end('file not found')
// })


//3rd way pipe()
// easist way less time consuming
// in above wayy incoming read data was not written with same speed but using this way we can read and write data with same speeed
const readable_stream = fs.createReadStream('input.txt');
readable_stream.pipe(res)

});

server.listen(8000, "127.0.0.1")








