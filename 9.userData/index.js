import http from 'http';
import fs from 'fs';

const server = http.createServer((req,res)=>{
// now for loading api data onli once we will use sync read method
const data = fs.readFileSync('../userAPI/userapi.json' , "utf-8")
    //retrieving api data on screen
  // res.end(data)
  const objdata = JSON.parse(data);


if(req.url == '/'){
res.end('hello')}


else if(req.url == '/about'){
    res.end('about')
}

else if (req.url == '/userapi'){
    // fs.readFile('../userAPI/userapi.json' , "utf-8", (err,data)=>{
    //       //retrieving api data on screen
    //     // res.end(data)
    //     const objdata = JSON.parse(data);
        res.writeHead(200, {"content-type": "application/json"})
        res.end(objdata[0].address.city)
    // })

}



else{
    res.writeHead(404, {"Content-type" : "text/html"}) // by doing this we will get 404 error code else we were still getting 200 only 
    res.end("<p>page doesnt exist</p>")
}
});

server.listen(9853 ,()=>{
    console.log('listening at port 9853')
});
