const express = require('express');
const bodyParser = require('body-parser');
// const router = require('express-promise-router')();
const Knex = require('knex');
const { Model } = require('objection');

const CONFIG = require('./config');


// Initialize knex.
// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex( Knex(CONFIG.database.development) );


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(router);
app.use(errorHandler);

app.use('/api', require('./app/routes'));

const server = app.listen(
	CONFIG.server.port,
	() => console.log('Server is running on  http://localhost:'+ server.address().port)
);


/*const router = promiseRouter();
const app = express()
	.use(bodyParser.json())
	.use(morgan('dev'))
	.use(router)
	.set('json spaces', 2);*/

// Register our REST API.
// registerApi(router);

// Error handling. The `ValidationError` instances thrown by objection.js have a `statusCode`
// property that is sent as the status code of the response.
//
// NOTE: This is not a good error handler, this is the simplest one. See the error handing
//       recipe for a better handler: http://vincit.github.io/objection.js/#error-handling
function errorHandler(err, req, res, next) {
	err ? res.status(err.statusCode || err.status || 500).send(err.data || err.message || {}) : next();
}