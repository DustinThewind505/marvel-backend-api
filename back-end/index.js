require('dotenv').config();

const server = require('./server');

const port = process.env.PORT || 8000;

// == API home page ==
server.get('/', (req, res) => {
    res.status(200).send('<h1>🤘 API up and running 🤘</h1>')
})

// == 404 page ==
server.use(function(req, res){
    res.status(404).send('<h1>🛑 404 page not found 🛑</h1>')
})

server.listen(port, () => {
    console.log(`\n\n\tServer listening on port ${port}\n`);
})
