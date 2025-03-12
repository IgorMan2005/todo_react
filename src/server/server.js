const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data_static.json');
const middlewares = jsonServer.defaults();
const port = 8001;

server.use(middlewares);
server.use(router);

server.listen(port);