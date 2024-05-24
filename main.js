const http = require("http");
const port = 3000;

var html = require('fs').readFileSync('index.html');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });

    response.end(html);
});

server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);