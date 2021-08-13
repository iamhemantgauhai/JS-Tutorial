const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end(`
        <p>Welcome to our home page</p>
        <a href='/about'>Back About</a>`)
    }
    if(req.url ==='/about'){
        res.end(`
        <p>Here is our short history</p>
        <a href='/error'>Go Error</a>`)
    }
    res.end(`
    <h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href='/'>Back Home</a>
    `)
})

server.listen(5000)
