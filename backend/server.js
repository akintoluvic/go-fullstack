const http = require('http');

const server = http.createServer((req, res) =>{
    res.end('This is my Node with -mon server');
})

server.listen(process.env.PORT || 3000);