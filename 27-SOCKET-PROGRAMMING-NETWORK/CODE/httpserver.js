const http = require('http');
const server = http.createServer((req, res) => {
  console.log('New connection was created');
  if (req.url === '/home') {
    return res.end('welcome home');
  } else {
    return res.end('something!!');
  }
});

server.listen(3000, () => {
  console.log('server started at port 3000');
});
