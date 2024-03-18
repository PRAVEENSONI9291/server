import http from 'http';


const server= http.createServer((req,res)=>{


    if(req.url==='/')
    {
        res.end('Main page')
    }
    else if(req.url==='/home')
    {
        res.end('Welcome Home')
    }
    else if(req.url==='/about')
    {
        res.end('Welcome to about us page')
    }
    else if(req.url==='/node')
    {
        res.end('Welcome to my node js project')
    }
    else
    {
        res.end('invalid request')
    }
});

server.listen(5000,"127.0.0.1", ()=>{
    console.log("listening to the server");
})