const jsonServer = require('json-server');
const server = jsonServer.create();
const low = require('lowdb');
const db = low('server-data.json');
const router = jsonServer.router('server-data.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.get('/login', (req, res) => {
    const user = db.get("users")
        .find({ name: "roy"})
    if (user) {
        res.json(user)
    } else {
        res.sendStatus(404)
    }
})

server.listen(port);