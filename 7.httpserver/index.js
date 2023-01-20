import http from 'http';

const server = http.createServer((req,res)=>{
// console.log(req.url)

if(req.url == '/'){
res.end('hello')}


else if(req.url == '/a'){
    res.end('about')
}

else{
    res.writeHead(404, {"Content-type" : "text/html"}) // by doing this we will get 404 error code else we were still getting 200 only 
    res.end("<p>page doesnt exist</p>")
}
});

server.listen(9853 ,()=>{
    console.log('listening at port 9853')
});
