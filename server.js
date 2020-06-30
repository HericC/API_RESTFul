// .env
require('dotenv').config()


// server config
const server = require('express')();
server.set('url', process.env.URL || 'http://localhost');
server.set('port', process.env.PORT || 3000);


// cors config
const cors = require('cors');
server.use(cors());


// bodyParser config
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


// Loading Routes
const routes = require('./api/routes/routes');
const testRoutes = require('./api/routes/testRoutes');
// ...


// Using Routes
server.use(routes);
server.use('/test', testRoutes);
// ...


// Server Start
const url = server.get('url');
const port = server.get('port');
server.listen(port, () => {
    console.log(`Running: "${url}:${port}/"`);
});

