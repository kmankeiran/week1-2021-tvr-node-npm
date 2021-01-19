const http = require('http'); // Like a PHP require

// require is more or less the same as a JS import

const hostname = '127.0.0.1'; // this is localhost
const port = process.env.PORT || 3000; // localhost:3000

// req - listen for requests. res - listen for responses.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('8 days and counting until the world freaking parties cuz the orange idiot will be gone!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});