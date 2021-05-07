const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req);
res.write('<h1>hello!</h1>');
res.end();
});
server.listen(7777);