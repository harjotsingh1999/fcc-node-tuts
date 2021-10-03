const http= require('http');

const server= http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url==='/')
    {
        res.end("Welcome to our homepage")
    }
    else if(req.url=== '/about')
    {
        res.end("What do you want to know about us?")
    }
    else res.end(
        `<h1>Oops</h1>
        <p>We cant find the page you are looking for.</p>
        <a href="/">Back home</a>`
    );
});

server.listen(1010);