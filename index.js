'use strict';
const express = require('express');

const { PORT } = require('./config');
const { PROPUBLICA_API_KEY } = require('./keys');

const app = express();

let server;

const runServer = async (port = PORT) => {
	const server = await app.listen(port, () => {
		console.log(`Time to work! Your app is listening on port:${port}`);
		console.log(PROPUBLICA_API_KEY);
	});
};

// if server.js is called directly (aka, with `node index.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
	runServer().catch(err => console.error(err));
}
module.exports = { app, runServer };
