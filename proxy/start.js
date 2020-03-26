const proxy = require('./index.js');

const port = process.env.NODE_ENV === 'test' ? 8080 : 3000;

const server = proxy.listen(port, () => {console.log(`Running comments feed on ${port}`)});

let killServer = () => {
  server.close();
};

module.exports = server;