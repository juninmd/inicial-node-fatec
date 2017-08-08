const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' })
    res.end('Este é um servidor web escrito em node js');
}).listen(3000, '127.0.0.1');
